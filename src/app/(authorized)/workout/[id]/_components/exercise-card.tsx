"use client";

import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSortable } from "@dnd-kit/sortable";
import { MdDragIndicator } from "react-icons/md";

type Props = {
  exercise: {
    id: number;
    name: string;
    type: string;
    time: number;
    description: string;
    muscles: string[];
    video_url: string;
  };
};

export function ExerciseCard({ exercise }: Props) {
  const { attributes, listeners, setNodeRef } = useSortable({
    id: exercise.id,
  });
  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="flex items-center gap-1 rounded-xl border-2 p-2"
    >
      <MdDragIndicator size={32} />
      <Sheet>
        <SheetTrigger asChild>
          <div className="w-full cursor-pointer">
            <h2 className="text-xl uppercase sm:text-2xl lg:text-3xl">
              {exercise.name}
            </h2>
            <p className="font-mono text-muted-foreground">{exercise.time}</p>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-3xl">{exercise.name}</SheetTitle>
            <SheetDescription>{exercise.description}</SheetDescription>
          </SheetHeader>
          <section className="mt-2">
            <h2>Focus Area</h2>
            <div className="mt-2 flex flex-wrap items-center gap-1">
              {exercise.muscles.map((area, index) => (
                <Badge key={index} className="text-lg">
                  {area}
                </Badge>
              ))}
            </div>
          </section>
        </SheetContent>
      </Sheet>
    </li>
  );
}
