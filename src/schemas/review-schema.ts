import { z } from "zod";

export const reviewWorkoutSchema = z.object({
  content: z.string().min(1),
  rating: z.string().refine((value) => !!parseInt(value), {
    message: "Please enter a rating",
  }),
  title: z.string().min(1),
});

export type reviewWorkoutType = z.infer<typeof reviewWorkoutSchema>;

export const reviewWorkoutDefault = {
  content: "",
  rating: "0",
  title: "",
};
