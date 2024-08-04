import "next-auth";
declare module "next-auth" {
  interface User {
    access_token: string;
    refresh_token: string;
    access_expire: number;
    refresh_expire: number;
  }
  interface Session {
    access_token: string | unknown;
    user: {
      id: number;
      username: string;
      display_name: string | null;
      email: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string | unknown;
    access_expire: number;
  }
}
