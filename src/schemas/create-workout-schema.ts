import { z } from "zod";

const exercise = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  video_url: z.string(),
  type: z.string(),
  muscles: z.array(z.string()),
});
const exercise_time = z.object({
  id: z.number(),
  time: z.string(),
});

export const createWorkoutSchema = z.object({
  name: z.string().min(2).max(50),
  exercises: z.array(exercise),
  exercise_time: z.array(exercise_time),
});

export type createWorkoutType = z.infer<typeof createWorkoutSchema>;

export const createWorkoutDefault = {
  name: "",
  exercises: [],
  exercise_time: [],
};
