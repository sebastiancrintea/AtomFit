import { checkError, BASE_URL, HEADERS } from "@/lib/fetchUtils";

import { toast } from "sonner";

export const updateCurrentWeight = async (weight: number | null) => {
  if (!weight) return { error: "You need to input a weight to update it :)" };
  try {
    const response = await fetch(`${BASE_URL}/????`, {
      method: "POST",
      headers: HEADERS,
      credentials: "include",
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
