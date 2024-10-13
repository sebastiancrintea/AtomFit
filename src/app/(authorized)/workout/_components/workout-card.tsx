import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Workout } from "@/types/workout";
import Link from "next/link";

type Props = {
  workout: Workout;
};

export function WorkoutCard({ workout }: Props) {
  return (
    <>
      <Link href={`/workout/${workout.id}`}>
        <Card className="border-2 bg-popover transition-all hover:scale-105">
          <CardHeader className="p-4">
            <div className="mx-auto aspect-square w-full max-w-[250px] rounded-xl bg-secondary"></div>

            <h2 className="overflow-hidden font-mono uppercase">
              {workout.name}
            </h2>
            <CardDescription className="font-semibold">
              20 min | 15 exercises
              {workout.workout_exercises && workout.workout_exercises.length}
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </>
  );
}
