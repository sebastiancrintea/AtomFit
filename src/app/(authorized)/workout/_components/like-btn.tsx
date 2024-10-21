"use client";

import { likeExercise } from "@/actions/exercise";
import { Button } from "@/components/ui/button";
import { GoHeart } from "react-icons/go";

export function LikeBtn({ workout_id }: { workout_id: number }) {
  return (
    <>
      <Button
        onClick={async (e) => {
          e.preventDefault();
          await likeExercise(workout_id);
        }}
        size={"icon"}
        variant={"secondary"}
      >
        <GoHeart size={28} />
        {/* <GoHeartFill /> */}
      </Button>
    </>
  );
}
