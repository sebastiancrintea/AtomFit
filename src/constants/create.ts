import createWorkoutIMG from "@/../public/assets/img/create-workout.jpg";
import { StaticImageData } from "next/image";

export const create = [
  {
    title: "Workout",
    src: createWorkoutIMG,
    alt: "Create Workout Image",
    description:
      "Here you can create a new personalized workout for you or the public.",
  },
] as const;

export type create = {
  title: string;
  src: StaticImageData;
  alt: string;
  description: string;
};
