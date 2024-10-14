import { getAuthHeaders } from "@/lib/authHeader";
import { checkError, BASE_URL } from "@/lib/fetchUtils";

import { toast } from "sonner";

type createExerciseParams = {
  name: string;
  description: string;
  is_duration: boolean;
  tutorial_link: string;
  muscles: string[];
};

export const getExercises = async (
  search: string | undefined,
  tags: string[] | undefined,
) => {
  const url = new URL(`${BASE_URL}/exercises`);
  search
    ? url.searchParams.append("search", search)
    : url.searchParams.delete("search");
  tags
    ? url.searchParams.append("tags", tags.toLocaleString())
    : url.searchParams.delete("tags");
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: await getAuthHeaders(),
      next: { revalidate: 0 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);
    return data;
  } catch (error) {
    return checkError(error);
  }
};

export const createExercise = async (body: createExerciseParams) => {
  try {
    const response = await fetch(`${BASE_URL}/exercises`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);
    toast.success("You created a new exercise with success!");
    return data;
  } catch (error) {
    return checkError(error);
  }
};
