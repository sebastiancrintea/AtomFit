"use client";

import { likeExercise } from "@/actions/exercise";
import { Button } from "@/components/ui/button";
import { GoHeart } from "react-icons/go";

export function LikeBtn({ exercise_id }: { exercise_id: number }) {
  return (
    <>
      <Button
        onClick={async (e) => {
          e.preventDefault();
          await likeExercise(exercise_id);
        }}
        size={"icon"}
        variant={"ghost"}
      >
        <GoHeart size={28} />
        {/* <GoHeartFill /> */}
      </Button>
    </>
  );
}
