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

type getExercisesParams = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export const getExercises = async ({ searchParams }: getExercisesParams) => {
  const offset =
    searchParams?.limit &&
    searchParams?.page &&
    +searchParams?.limit * (+searchParams?.page - 1);
  const url = new URL(`${BASE_URL}/exercises`);

  if (offset !== undefined && offset) {
    const obj = { ...searchParams, offset };
    const params = new URLSearchParams({ ...obj });
    url.search = params.toString();
  } else {
    const obj = { ...searchParams };
    const params = new URLSearchParams({ ...obj });
    url.search = params.toString();
  }
  console.log(url);
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

export const likeExercise = async (exercise_id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/exercises/${exercise_id}/like`, {
      method: "POST",
      headers: await getAuthHeaders(),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);
    toast.success(data);
    return data;
  } catch (error) {
    return checkError(error);
  }
};

export const unLikeExercise = async (exercise_id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/exercises/${exercise_id}/like`, {
      method: "DELETE",
      headers: await getAuthHeaders(),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);
    toast.success(data);
    return data;
  } catch (error) {
    return checkError(error);
  }
};
