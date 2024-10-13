import { z } from "zod";

const exercise = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  is_duration: z.boolean(),
  duration: z.string().min(1),
  muscles: z.array(z.string()),
  tutorial_link: z.string(),
  user_id: z.number(),
  created_at: z.string(),
});

export const createWorkoutSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(500),
  exercises: z.array(exercise),
});

export type createWorkoutType = z.infer<typeof createWorkoutSchema>;

export const createWorkoutDefault = {
  name: "",
  description: "",
  exercises: [],
};
