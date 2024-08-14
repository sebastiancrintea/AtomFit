import { checkError, BASE_URL } from "@/lib/fetchUtils";
import { getAuthHeaders } from "@/lib/getAuthHeaders";
import { MuscleGroups } from "@/schemas/create-exercise-schema";
import { toast } from "sonner";

type createExerciseParams = {
  name: string;
  description: string;
  type: "duration" | "repeats";
  video_url: string;
  muscles: MuscleGroups[];
};

export const createExercise = async (body: createExerciseParams) => {
  try {
    const response = await fetch(`${BASE_URL}/exercise`, {
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
