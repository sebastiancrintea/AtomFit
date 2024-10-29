import { Exercise } from "./exercise";

export type Workout = {
  id: number;
  user_id: number;
  name: string;
  description: string;
  tutorial_link: string;
  created_at: string;
  likes: number;
  workout_exercises: {
    workout_id: number;
    exercise_id: number;
    duration: number;
    exercise: Exercise;
  }[];
  user_liked: boolean;
};

export type WorkoutPage = {
  data: Workout[];
  total_count: number;
};
