import { Badge } from "@/components/ui/badge";
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
import { LikeBtn } from "../../workout/_components/like-btn";

type Props = {
  workout: Workout;
};

export function WorkoutCardCarousel({ workout }: Props) {
  const video_id = workout.tutorial_link.slice(32);
  const thumbnailUrl = `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`;
  return (
    <>
      <Link href={`/workout/${workout.id}`}>
        <Card className="group cursor-pointer border-2 bg-popover transition-all hover:brightness-125">
          <CardHeader className="p-4 pb-1">
            <div className="relative mx-auto aspect-video w-full max-w-[350px] rounded-xl bg-secondary">
              <Image
                src={thumbnailUrl}
                alt={workout.name}
                fill
                className="mx-auto h-auto max-w-full rounded-lg object-cover"
              />
            </div>
            {/* <div className="mx-auto aspect-square w-full max-w-[250px] rounded-xl bg-secondary"></div> */}
            <CardTitle>{workout.name}</CardTitle>
            <CardDescription>{workout.description}</CardDescription>
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
