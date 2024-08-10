import { z } from "zod";

export const createExerciseSchema = z.object({
  name: z.string(),
  description: z.string(),
  video_url: z.string().url(),
  time: z.enum(["repeats", "duration"]),
  muscles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export type createExerciseType = z.infer<typeof createExerciseSchema>;

export const createExerciseDefault = {
  name: "",
  description: "",
  video_url: "",
  time: undefined,
  muscles: [],
};
