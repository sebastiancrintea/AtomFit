import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Workout } from "@/types/workout";
import Link from "next/link";
import { LikeBtn } from "../../exercises/_components/like-btn";

type Props = {
  workout: Workout;
};

export function WorkoutCard({ workout }: Props) {
  return (
    <>
      <Link href={`/workout/${workout.id}`}>
        <Card className="group relative mb-2 w-[260px] cursor-pointer overflow-hidden border-2 bg-popover transition-all hover:brightness-125">
          <CardHeader className="p-4">
            <div className="mx-auto aspect-square w-full max-w-[250px] rounded-xl bg-secondary"></div>

            <h2 className="overflow-hidden font-mono uppercase">
              {workout.name}
            </h2>
            <div className="flex flex-wrap gap-1">
              {/* {exercise.muscles.map((muscle, index) => (
                    <Badge key={index} className="uppercase">
                      {muscle}
                    </Badge>
                  ))} */}
            </div>
            <CardDescription className="font-semibold">
              {workout.description}
            </CardDescription>
          </CardHeader>
          {/* <LikeBtn exercise_id={exerc} /> */}
        </Card>
      </Link>
    </>
  );
}
