import { NavigateBackButton } from "@/components/shared/NavigateBackButton";
import { Button } from "@/components/ui/button";
import { MdDragIndicator } from "react-icons/md";
import { ExerciseCard } from "./_components/exerciseCard";

const exercises = [
  {
    title: "Jumping Jacks",
    type: "duration",
    time: "00:20",
    instructions:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellat pariatur nam voluptate maiores iure perspiciatis quidem natus, doloremque nihil assumenda at non vitae expedita quas magni cumque inventore. Necessitatibus.",
    focus: [
      "Shoulders",
      "Adductors",
      "Calves",
      "Glutes",
      "Chest",
      "Quadriceps",
    ],
  },
  {
    title: "Push-Ups",
    type: "Repeats",
    time: "x8",
    instructions:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellat pariatur nam voluptate maiores iure perspiciatis quidem natus, doloremque nihil assumenda at non vitae expedita quas magni cumque inventore. Necessitatibus.",
    focus: ["Chest", "Triceps", "Shoulders"],
  },
  {
    title: "Wide Arm Push-ups",
    type: "Repeats",
    time: "x8",
    instructions:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellat pariatur nam voluptate maiores iure perspiciatis quidem natus, doloremque nihil assumenda at non vitae expedita quas magni cumque inventore. Necessitatibus.",
    focus: ["Chest", "Triceps", "Shoulders"],
  },
];

type Props = {
  params: { id: string };
};

export default function SingleWorkout({ params }: Props) {
  console.log(params.id);
  return (
    <>
      <section className="h-full w-full space-y-2 rounded-xl border-2 bg-popover p-2">
        <section className="relative aspect-video rounded-xl bg-secondary">
          <div className="absolute top-0 flex items-center gap-2 rounded-br-xl rounded-tl-xl bg-primary p-2">
            <NavigateBackButton />
            <h1 className="text-xl uppercase lg:text-4xl">Workout Title</h1>
          </div>
          <div className="absolute bottom-2 left-2 hidden border-l-4 border-primary p-2 sm:block">
            <h4 className="font-mono">20 mins | 16 Exercises</h4>
          </div>
          <div className="absolute bottom-2 right-2">
            <Button className="font-mono text-xl font-semibold uppercase">
              Start
            </Button>
          </div>
        </section>
        <div className="border-l-4 border-primary px-2 sm:hidden">
          <h4 className="font-mono text-base">20 mins | 16 Exercises</h4>
        </div>
        <ul className="space-y-2">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </ul>
      </section>
    </>
  );
}
