"use client";

import { Button } from "@/components/ui/button";
import { GoHeart } from "react-icons/go";

export function LikeBtn({ exercise_id }: { exercise_id: number }) {
  return (
    <>
      <Button
        onClick={(e) => {
          e.preventDefault();
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
