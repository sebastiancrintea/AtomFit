import { NavigateBackButton } from "@/components/shared/navigate-back";
import { Button } from "@/components/ui/button";
import { ExerciseCard } from "./_components/exercise-card";
import { ExercisesCarousel } from "./_components/exercises-carousel";
import Link from "next/link";
import { getWorkoutById } from "@/actions/workout";
import { Workout } from "@/types/workout";

type Props = {
  searchParams?: { start?: boolean };
  params: { id: string };
};

export default async function SingleWorkout({ searchParams, params }: Props) {
  const data: Workout = await getWorkoutById(+params.id);
  const workoutExercises = data.workout_exercises;
  return (
    <>
      {searchParams?.start ? (
        <>
          <header className="flex items-center gap-2">
            <NavigateBackButton />
            <h1 className="text-xl uppercase lg:text-4xl">
              {data ? data.name : "Workout Title"}
            </h1>
          </header>
          <ExercisesCarousel exercises={workoutExercises} />
        </>
      ) : (
        <section className="h-full w-full space-y-2 rounded-xl border-2 bg-popover p-2">
          <section className="relative aspect-video rounded-xl bg-secondary">
            <div className="absolute top-0 flex items-center gap-2 rounded-br-xl rounded-tl-xl bg-primary p-2">
              <NavigateBackButton />
              <h1 className="text-xl uppercase lg:text-4xl">
                {data ? data.name : "Workout Title"}
              </h1>
            </div>
            <div className="absolute bottom-2 left-2 hidden border-l-4 border-primary p-2 sm:block">
              <h4 className="font-mono">
                | {workoutExercises && workoutExercises.length} Exercises
              </h4>
            </div>
            <div className="absolute bottom-2 right-2">
              <Button
                asChild
                className="font-mono text-xl font-semibold uppercase"
              >
                <Link href={"?start=true"}>Start</Link>
              </Button>
            </div>
          </section>
          <div className="border-l-4 border-primary px-2 sm:hidden">
            <h4 className="font-mono text-base">
              | {workoutExercises && workoutExercises.length} Exercises
            </h4>
          </div>
          <ul className="space-y-2">
            {workoutExercises &&
              workoutExercises.map((exercise, index) => (
                <ExerciseCard
                  key={index}
                  exercise={exercise.exercise}
                  duration={exercise.duration}
                />
              ))}
          </ul>
        </section>
      )}
    </>
  );
}
