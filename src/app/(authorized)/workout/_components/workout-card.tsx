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
            <div className="relative mx-auto aspect-video w-full max-w-[300px] rounded-xl bg-secondary">
              <Image
                src={thumbnailUrl}
                alt={workout.name}
                fill
                className="h-auto max-w-full rounded-lg object-cover"
              />
            </div>

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
