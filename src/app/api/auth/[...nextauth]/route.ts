import { BASE_URL } from "@/lib/fetchUtils";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

// const refreshToken = async (token: any) => {
//   console.log("refreshed token");
//   const response = await fetch(
//     `${BASE_URL}/auth/refresh?refresh_token=${token.refresh_token}`,
//   );
//   if (response.ok) {
//     const data = await response.json();

//     cookies().set({
//       name: "access_token",
//       value: data.access_token,
//       httpOnly: true,
//       secure: true,
//     });

//     return {
//       ...token,
//       error: null,
//       access_token: data.access_token,
//       access_expire: Date.now() + data.access_expire * 60 * 1000,
//     };
//   } else {
//     return { error: "RefreshTokenError" };
//   }
// };

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Username or Email",
          type: "text",
          placeholder: "@username or johndoe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;

        const response = await fetch(`${BASE_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (!response.ok) throw new Error(data.detail);

        cookies().set({
          name: "access_token",
          value: data.access_token,
          secure: true,
        });

        return data;
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
        token.access_token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.access_token = token.access_token;
      if (session.access_token ?? false) {
        const userData = await fetch(`${BASE_URL}/users`, {
          headers: { Authorization: `Bearer ${token.access_token}` },
        });
        if (userData.ok) {
          session.user = await userData.json();
        }
      }
      // console.log(session);
      return session;
    },
  },
});

export { handler as GET, handler as POST };
