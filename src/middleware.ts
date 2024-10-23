export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/protected/:path*",
    "/protected",
    "/home",
    "/workout",
    "/create",
    "/exercises",
    "/profile",
  ],
};
