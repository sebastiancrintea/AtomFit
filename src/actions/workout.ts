import { getAuthHeaders } from "@/lib/authHeader";
import { BASE_URL, checkError, checkErrorNoToast } from "@/lib/fetchUtils";
import { toast } from "sonner";

type createWorkoutParams = {
  name: string;
  description: string;
  exercises: {
    duration: number;
    exercise_id: number;
  }[];
};

export const createWorkout = async (body: createWorkoutParams) => {
  try {
    const response = await fetch(`${BASE_URL}/workouts`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);

    toast.success("You created a workout with success!");
    return data;
  } catch (error) {
    return checkError(error);
  }
};

type getWorkoutParams = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export const getWorkouts = async ({ searchParams }: getWorkoutParams) => {
  const offset =
    searchParams?.limit && searchParams?.page
      ? +searchParams.limit * (+searchParams.page - 1)
      : 0;
  const url = new URL(`${BASE_URL}/workouts`);
  const params = new URLSearchParams({ ...searchParams, offset: `${offset}` });
  url.search = params.toString();
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

export const get10Workouts = async () => {
  const url = new URL(`${BASE_URL}/workouts?limit=10`);
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

export const getWorkoutById = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/workouts/${id}`, {
      method: "GET",
      headers: await getAuthHeaders(),
      next: { revalidate: 0 },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);
    return data;
  } catch (error) {
    return checkErrorNoToast(error);
  }
};

type reviewWorkoutParams = {
  workoutId: number;
  body: {
    content: string;
    rating: number;
    title: string;
  };
};

export const reviewWorkout = async ({
  workoutId,
  body,
}: reviewWorkoutParams) => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/workout/${workoutId}`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail);
    return data;
  } catch (error) {
    return checkErrorNoToast(error);
  }
};
