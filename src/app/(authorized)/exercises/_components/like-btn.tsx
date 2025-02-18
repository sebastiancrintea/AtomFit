"use client";

import { likeExercise, unLikeExercise } from "@/actions/exercise";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { GoHeart, GoHeartFill } from "react-icons/go";

export function LikeBtn({
  exercise_id,
  user_liked,
}: {
  exercise_id: number;
  user_liked?: boolean;
}) {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={async (e) => {
          e.preventDefault();
          user_liked
            ? await unLikeExercise(exercise_id)
            : await likeExercise(exercise_id);
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
