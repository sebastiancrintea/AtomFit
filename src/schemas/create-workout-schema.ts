import { z } from "zod";

export const createWorkoutSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(500),
});

export type createWorkoutType = z.infer<typeof createWorkoutSchema>;

export const createWorkoutDefault = {
  name: "",
  description: "",
};
