import { z } from "zod";

const exercise = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  video_url: z.string(),
  type: z.string(),
  muscles: z.array(z.string()),
  time: z.string().min(1),
});

export const createWorkoutSchema = z.object({
  name: z.string().min(2).max(50),
  exercises: z.array(exercise),
});

export type createWorkoutType = z.infer<typeof createWorkoutSchema>;

export const createWorkoutDefault = {
  name: "",
  exercises: [],
};
