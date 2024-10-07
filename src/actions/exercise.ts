import { checkError, BASE_URL, HEADERS } from "@/lib/fetchUtils";

import { toast } from "sonner";

type createExerciseParams = {
  name: string;
  description: string;
  type: "duration" | "repeats";
  video_url: string;
  muscles: string[];
};

export const getExercises = async () => {
  try {
    const response = await fetch(`${BASE_URL}/exercises`, {
      method: "GET",
      headers: HEADERS,
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);

    toast.success(data.success);
    return data;
  } catch (error) {
    return checkError(error);
  }
};

export const createExercise = async (body: createExerciseParams) => {
  try {
    const response = await fetch(`${BASE_URL}/exercise`, {
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
