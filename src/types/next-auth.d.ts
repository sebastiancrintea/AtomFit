import "next-auth";
declare module "next-auth" {
  interface User {
    token: string;
  }
  interface Session {
    access_token: string | unknown;
    user: {
      id: number;
      username: string;
      email: string;
      user_attr: {
        goal: string;
        height: number;
        is_male: boolean;
        weight: number;
        weight_goal: number;
      };
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token: string | unknown;
  }
}
