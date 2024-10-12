import { checkError, BASE_URL, HEADERS } from "@/lib/fetchUtils";
import { signIn } from "next-auth/react";
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
  weight_goal: number;
};

export const register = async (body: registerParams) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data);

    toast.success(data.success);
    return data;
  } catch (error) {
    return checkError(error);
  }
};
type loginParams = {
  email: string;
  password: string;
};

export const loginAction = async (body: loginParams) => {
  const { email, password } = body;
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });
    if (response?.error) throw new Error(response.error);

    toast.success("You signed in with success!");
    return response;
  } catch (error) {
    return checkError(error);
  }
};
