"use client";

import { likeWorkout, unLikeWorkout } from "@/actions/workout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { GoHeart, GoHeartFill } from "react-icons/go";

export function LikeBtn({
  workout_id,
  user_liked,
}: {
  workout_id: number;
  user_liked: boolean;
}) {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={async (e) => {
          e.preventDefault();
          user_liked
            ? await unLikeWorkout(workout_id)
            : await likeWorkout(workout_id);
          router.refresh();
        }}
        size={"icon"}
        variant={"ghost"}
      >
        {user_liked ? <GoHeartFill size={28} /> : <GoHeart size={28} />}
      </Button>
    </>
  );
}
