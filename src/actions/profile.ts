import { getAuthHeaders } from "@/lib/authHeader";
import { checkError, BASE_URL, HEADERS } from "@/lib/fetchUtils";
import { editProfileFormType } from "@/schemas/edit-profile-schema";
import { updateGoalsType } from "@/schemas/update-goals-schema";

import { toast } from "sonner";

export const updateCurrentWeight = async ({ weight }: { weight: number }) => {
  try {
    const response = await fetch(`${BASE_URL}/users/attributes/log/weight`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify({ weight }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);

    toast.success(data.success);
    return data;
  } catch (error) {
    return checkError(error);
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
