import { BASE_URL } from "@/lib/fetchUtils";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signOut } from "next-auth/react";

import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
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
          value: data.token,
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
      if (session.user ?? false) {
        const userData = await fetch(`${BASE_URL}/users/attributes`, {
          headers: { Authorization: `Bearer ${token.access_token}` },
        });
        const data = await userData.json();
        if (data.error) {
          signOut({
            callbackUrl: "/auth/login",
            redirect: true,
          });
          return session;
        }
        if (userData.ok) {
          session.user = data;
        }
      }
      // console.log(session);
      return session;
    },
  },
};

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}
