import { z } from "zod";

export const reviewWorkoutSchema = z.object({
  content: z.string().min(1),
  rating: z.string().min(1),
  title: z.string().min(1),
});

export type reviewWorkoutType = z.infer<typeof reviewWorkoutSchema>;

export const reviewWorkoutDefault = {
  content: "",
  rating: "",
  title: "",
};
