import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Workout } from "@/types/workout";
import Link from "next/link";
import { LikeBtn } from "./like-btn";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Props = {
  workout: Workout;
};

export function WorkoutCard({ workout }: Props) {
  const video_id = workout.tutorial_link.slice(32);
  const thumbnailUrl = `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`;
  return (
    <>
      <Link href={`/workout/${workout.id}`}>
        <Card className="group relative mb-2 w-[260px] cursor-pointer overflow-hidden border-2 bg-popover transition-all hover:brightness-125">
          <CardHeader className="p-4 pb-1">
            {/* <div className="mx-auto aspect-square w-full max-w-[250px] rounded-xl bg-secondary"></div> */}
            <Image
              src={thumbnailUrl}
              alt={workout.name}
              width={300}
              height={300}
              className="h-auto max-w-full rounded-lg"
            />

            <h2 className="overflow-hidden font-mono uppercase">
              {workout.name}
            </h2>
            <CardDescription className="font-semibold">
              {workout.description}
            </CardDescription>
          </CardHeader>
          <div className="flex items-center justify-between px-4 py-1 opacity-0 transition-all group-hover:opacity-100">
            <div className="flex items-center gap-1">
              <Badge>{workout.likes}</Badge>
              <span>likes</span>
            </div>
            <LikeBtn workout_id={workout.id} user_liked={workout.user_liked} />
          </div>
        </Card>
      </Link>
    </>
  );
}
