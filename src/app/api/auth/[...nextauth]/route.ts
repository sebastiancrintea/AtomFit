import NextAuth from "next-auth";
import { authOptions } from "./auth";

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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
