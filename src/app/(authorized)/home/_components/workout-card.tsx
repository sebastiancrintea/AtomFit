import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

type Props = {
  workout: Workout;
};

export function WorkoutCardCarousel({ workout }: Props) {
  const video_id = workout.tutorial_link.slice(32);
  const thumbnailUrl = `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`;
  return (
    <>
      <Link href={`/workout/${workout.id}`}>
        <Card className="bg-popover transition-all hover:brightness-125">
          <CardHeader>
            <Image
              src={thumbnailUrl}
              alt={workout.name}
              width={400}
              height={200}
              className="mx-auto h-auto max-w-full rounded-lg"
            />
            {/* <div className="mx-auto aspect-square w-full max-w-[250px] rounded-xl bg-secondary"></div> */}
            <CardTitle>{workout.name}</CardTitle>
            <CardDescription>{workout.description}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </>
  );
}
