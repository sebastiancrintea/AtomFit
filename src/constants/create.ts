import createWorkoutIMG from "@/../public/assets/img/create-workout.jpg";
import createExerciseIMG from "@/../public/assets/img/create-exercise.jpg";
import { StaticImageData } from "next/image";

export const create = [
  {
    title: "Workout",
    src: createWorkoutIMG,
    alt: "Create Workout Image",
    description:
      "Here you can create a new personalized workout for you or the public.",
  },
  {
    title: "Exercise",
    src: createExerciseIMG,
    alt: "Create Exercise Image",
    description:
      "Here you can provide our application with a new exercise. Thank you for your support.",
  },
  {
    title: "Meal Plan",
    src: createExerciseIMG,
    alt: "Create Exercise Image",
    description:
      "Here you can provide our application with a new exercise. Thank you for your support.",
  },
] as const;

export type create = {
  title: string;
  src: StaticImageData;
  alt: string;
  description: string;
};
