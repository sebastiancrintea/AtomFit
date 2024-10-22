import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Workout } from "@/types/workout";
import Link from "next/link";

type Props = {
  workout: Workout;
};

export function WorkoutCardCarousel({ workout }: Props) {
  return (
    <>
      <Link href={`/workout/${workout.id}`}>
        <Card className="bg-popover transition-all hover:brightness-125">
          <CardHeader>
            <div className="mx-auto aspect-square w-full max-w-[250px] rounded-xl bg-secondary"></div>
            <CardTitle>{workout.name}</CardTitle>
            <CardDescription>{workout.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div>dsadwa</div>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
