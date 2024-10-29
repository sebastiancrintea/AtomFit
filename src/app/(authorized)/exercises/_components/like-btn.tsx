"use client";

import { likeExercise } from "@/actions/exercise";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { GoHeart } from "react-icons/go";

export function LikeBtn({ exercise_id }: { exercise_id: number }) {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={async (e) => {
          e.preventDefault();
          await likeExercise(exercise_id);
          router.refresh();
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
