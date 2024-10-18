export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/protected/:path*",
    "/protected",
    "/home",
    "/profile",
    "/exercises",
    "/workout",
  ],
};
