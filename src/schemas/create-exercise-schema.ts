import { z } from "zod";

export const MuscleGroups = [
  "traps",
  "lats",
  "lower_back",
  "romboids",
  "abs",
  "biceps",
  "triceps",
  "forearms",
  "neck",
  "chest",
  "shoulders",
  "glutes",
  "quads",
  "hamstrings",
  "calves",
] as const;

export const createExerciseSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(10).max(300),
  tutorial_link: z.string().url(),
  is_duration: z.enum(["repeats", "duration"]),
  muscles: z
    .array(z.enum(MuscleGroups))
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

export type createExerciseType = z.infer<typeof createExerciseSchema>;

const links = [
  "https://www.youtube.com/watch?v=d1YBv2mWll0",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
];

export const createExerciseDefault = {
  name: "",
  description: "",
  tutorial_link: links[Math.floor(Math.random() * 2)],
  is_duration: undefined,
  muscles: [],
};
