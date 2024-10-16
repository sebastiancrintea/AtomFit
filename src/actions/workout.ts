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

export const getWorkouts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/workouts`, {
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

export const getSavedWorkouts = async (q?: string) => {
  try {
    const response = await fetch(`${BASE_URL}/workouts`, {
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
