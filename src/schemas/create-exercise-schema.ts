import { z } from "zod";

export enum MuscleGroups {
  traps = "traps",
  lats = "lats",
  lower_back = "lower_back",
  romboids = "romboids",

  abs = "abs",

  biceps = "biceps",
  triceps = "triceps",
  forearms = "forearms",

  neck = "neck",

  chest = "chest",

  shoulders = "shoulders",

  glutes = "glutes",
  quads = "quads",
  hamstrings = "hamstrings",
  calves = "calves",
}

export const createExerciseSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(10).max(300),
  video_url: z.string().url(),
  type: z.enum(["repeats", "duration"]),
  muscles: z
    .array(z.nativeEnum(MuscleGroups))
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

export type createExerciseType = z.infer<typeof createExerciseSchema>;

export const createExerciseDefault = {
  name: "",
  description: "",
  video_url: "https://www.youtube.com/watch?v=d1YBv2mWll0",
  type: undefined,
  muscles: [],
};
