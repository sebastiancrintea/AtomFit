"use client";

import { YoutubeEmbed } from "@/components/shared/youtube-embed";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Exercise } from "@/types/exercise";
import { useSortable } from "@dnd-kit/sortable";
import { MdDragIndicator } from "react-icons/md";

type Props = {
  exercise: Exercise;
  duration: number;
};

export function ExerciseCard({ exercise, duration }: Props) {
  const { attributes, listeners, setNodeRef } = useSortable({
    id: exercise.id,
  });
  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="flex items-center gap-1 rounded-xl border-2 px-4 py-2"
    >
      {/* <MdDragIndicator size={32} /> */}

      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full cursor-pointer">
            <h2 className="text-xl uppercase sm:text-2xl lg:text-3xl">
              {exercise.name}
            </h2>
            <p className="font-mono text-muted-foreground">
              {exercise.is_duration ? `${duration} seconds` : `x${duration}`}
            </p>
          </div>
        </DialogTrigger>
        <DialogContent className="md:min-w-[700px]">
          <DialogHeader>
            <DialogTitle className="text-3xl">{exercise.name}</DialogTitle>
          </DialogHeader>
          <section className="mt-2">
            <YoutubeEmbed embedId={exercise.tutorial_link.slice(32)} />
            <h2>Focus Area</h2>
            <div className="mt-2 flex flex-wrap items-center gap-1">
              {exercise.muscles.map((muscle, index) => (
                <Badge key={index} className="text-lg uppercase">
                  {muscle}
                </Badge>
              ))}
            </div>
            <p>{exercise.description}</p>
          </section>
        </DialogContent>
      </Dialog>
    </li>
  );
}
