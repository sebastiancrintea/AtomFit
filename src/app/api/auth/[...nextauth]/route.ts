import { BASE_URL } from "@/lib/fetchUtils";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const refreshToken = async (token: any) => {
  console.log("refreshed token");
  const response = await fetch(
    `${BASE_URL}/auth/refresh?refresh_token=${token.refresh_token}`,
  );
  if (response.ok) {
    const data = await response.json();
    cookies().set("access_token", data.access_token);

    return {
      ...token,
      error: null,
      access_token: data.access_token,
      access_expire: Date.now() + data.access_expire * 60 * 1000,
    };
  } else {
    return { error: "RefreshTokenError" };
  }
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        user: {
          label: "Username or Email",
          type: "text",
          placeholder: "@username or johndoe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { user, password } = credentials;
        const response = await fetch(`${BASE_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user, password }),
        });
        if (!response.ok) {
          const errorMessage = await response.json();
          throw new Error(errorMessage.detail);
        }
        return await response.json();
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        cookies().set("access_token", user.access_token);

        token.access_token = user.access_token;
        token.refresh_token = user.refresh_token;
        token.access_expire = Date.now() + user.access_expire * 60 * 1000;
      }
      if (Date.now() < token.access_expire) return token;

      return await refreshToken(token);
    },
    async session({ session, token }) {
      session.access_token = token.access_token;
      if (session.access_token ?? false) {
        const userData = await fetch(`${BASE_URL}/auth/users/me`, {
          headers: { Authorization: `Bearer ${token.access_token}` },
        });
        if (userData.ok) {
          session.user = await userData.json();
        }
      }
      console.log(session);
      return session;
    },
  },
});

export { handler as GET, handler as POST };
