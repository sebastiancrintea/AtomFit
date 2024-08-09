import { checkError, BASE_URL } from "@/lib/fetchUtils";
import { getAuthHeaders, removeToken } from "@/lib/getAuthHeaders";
import { signIn, signOut } from "next-auth/react";
import { toast } from "sonner";

type registerParams = {
  username: string;
  email: string;
  password: string;
  goal: string;
  is_male: boolean;
  age: number;
  height: number;
  weight: number;
  weight_preference: number;
};

export const register = async (body: registerParams) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.detail);
    }
    const result = await response.json();
    toast.success(result.success);
    return result;
  } catch (error) {
    return checkError(error);
  }
};
type loginParams = {
  email: string;
  password: string;
};

export const login = async (body: loginParams) => {
  const { email, password } = body;
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });
    if (response?.error) {
      throw new Error(response.error);
    }
    toast.success("You signed in with success!");
    return response;
  } catch (error) {
    return checkError(error);
  }
};

export const logout = () => {
  signOut();
  removeToken();
};
