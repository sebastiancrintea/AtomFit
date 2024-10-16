"use client";

import { Button } from "@/components/ui/button";
import { GoHeart } from "react-icons/go";

export function LikeBtn() {
  return (
    <>
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log("Clicked");
        }}
        size={"icon"}
        variant={"secondary"}
        className="absolute bottom-0 right-0 opacity-0 transition-all group-hover:opacity-100"
      >
        <GoHeart size={28} />
        {/* <GoHeartFill /> */}
      </Button>
    </>
  );
}
