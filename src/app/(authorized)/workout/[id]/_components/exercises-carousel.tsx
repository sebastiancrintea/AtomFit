"use client";

import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { WorkoutExercisePage } from "./workout-exercise-page";

type Props = {
  exercises: {
    id: number;
    name: string;
    description: string;
    video_url: string;
    type: string;
    muscles: string[];
    time: number;
  }[];
};

export function ExercisesCarousel({ exercises }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="size-full">
        <CarouselContent>
          {exercises.map((exercise, index) => (
            <CarouselItem key={index}>
              <WorkoutExercisePage exercise={exercise} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-popover p-1 opacity-80">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="size-7 rounded-full"
            onClick={() => api?.scrollPrev()}
            disabled={!api?.canScrollPrev()}
          >
            <FaChevronLeft />
          </Button>
          <div className="flex gap-1">
            {Array.from({ length: count }).map((_, index) => {
              if (index + 1 === current)
                return (
                  <div
                    onClick={() => api?.scrollTo(index)}
                    key={index}
                    className="h-3 w-6 cursor-pointer rounded-full bg-primary transition-all"
                  />
                );
              return (
                <div
                  onClick={() => api?.scrollTo(index)}
                  key={index}
                  className="size-3 cursor-pointer rounded-full bg-primary opacity-65 transition-all"
                />
              );
            })}
          </div>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="size-7 rounded-full"
            onClick={() => api?.scrollNext()}
            disabled={!api?.canScrollNext()}
          >
            <FaChevronRight />
          </Button>
        </div>
      </Carousel>
    </>
  );
}
