"use server";

import { cookies } from "next/headers";

export const getAuthHeaders = async () => {
  const token = cookies().get("access_token");
  if (token) {
    return new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    });
  }
  return new Headers({
    "Content-Type": "application/json",
  });
};
