import { z } from "zod";

export const createWorkoutSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(500),
  tutorial_link: z.string().url(),
});

export type createWorkoutType = z.infer<typeof createWorkoutSchema>;

const links = [
  "https://www.youtube.com/watch?v=d1YBv2mWll0",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
];

export const createWorkoutDefault = {
  name: "",
  description: "",
  tutorial_link: links[Math.floor(Math.random() * 2)],
};
