import { checkError, BASE_URL } from "@/lib/fetchUtils";
import { getAuthHeaders } from "@/lib/getAuthHeaders";
import { toast } from "sonner";

export const updateCurrentWeight = async (weight: number | null) => {
  if (!weight) return { error: "You need to input a weight to update it :)" };
  try {
    const response = await fetch(`${BASE_URL}/????`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({ weight }),
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
