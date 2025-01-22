import { getAuthHeaders } from "@/lib/authHeader";
import {
  checkError,
  BASE_URL,
  HEADERS,
  checkErrorNoToast,
} from "@/lib/fetchUtils";
import { editProfileFormType } from "@/schemas/edit-profile-schema";
import { updateGoalsType } from "@/schemas/update-goals-schema";
import { revalidateTag } from "next/cache";

import { toast } from "sonner";

export const updateCurrentWeight = async ({ weight }: { weight: number }) => {
  try {
    const response = await fetch(`${BASE_URL}/users/attributes/log/weight`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify({ weight }),
    });
    const data = await response.json();
    console.log(response, data);
    if (!response.ok) throw new Error(data.detail);
    revalidateTag("getCurrentWeight");
    toast.success(data.success);
    return data;
  } catch (error) {
    return checkError(error);
  }
};

export const getCurrentWeight = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/attributes/weight`, {
      method: "GET",
      headers: await getAuthHeaders(),
      next: { revalidate: 0, tags: ["getCurrentWeight"] },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);

    return data;
  } catch (error) {
    return checkErrorNoToast(error);
  }
};

export const editProfile = async (body: editProfileFormType) => {
  try {
    const response = await fetch(`${BASE_URL}/????`, {
      method: "POST",
      headers: HEADERS,
      credentials: "include",
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);

    toast.success(data.success);
    return data;
  } catch (error) {
    return checkError(error);
  }
};

export const updateGoals = async (body: updateGoalsType) => {
  try {
    const response = await fetch(`${BASE_URL}/????`, {
      method: "POST",
      headers: HEADERS,
      credentials: "include",
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);

    toast.success(data.success);
    return data;
  } catch (error) {
    return checkError(error);
  }
};

export const getMacronutrients = async () => {
  try {
    const response = await fetch(`${BASE_URL}/nutrients/daily-goal`, {
      method: "GET",
      headers: await getAuthHeaders(),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);

    return data;
  } catch (error) {
    return checkErrorNoToast(error);
  }
};

export const getMyWorkouts = async (user_id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/workouts/user/${user_id}`, {
      method: "GET",
      headers: await getAuthHeaders(),
      next: { revalidate: 3600 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);

    return data;
  } catch (error) {
    return checkErrorNoToast(error);
  }
};

export const getMyExercises = async (user_id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/exercises/${user_id}`, {
      method: "GET",
      headers: await getAuthHeaders(),
      next: { revalidate: 3600 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);

    return data;
  } catch (error) {
    return checkErrorNoToast(error);
  }
};
