import { BASE_URL, checkErrorNoToast } from "@/lib/fetchUtils";
import { toast } from "sonner";

export const getSavedWorkouts = async (q?: string) => {
  try {
    const response = await fetch(`${BASE_URL}/......`, {
      method: "GET",
      credentials: "include",
      next: { revalidate: 0 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);
    return data;
  } catch (error) {
    return checkErrorNoToast(error);
  }
};

export const getMineWorkouts = async (q?: string) => {
  try {
    const response = await fetch(`${BASE_URL}/......`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);

    toast.success(data.success);
    return data;
  } catch (error) {
    return checkErrorNoToast(error);
  }
};
