import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdDragIndicator } from "react-icons/md";

type Props = {
  exercise: {
    title: string;
    type: string;
    time: string;
    instructions: string;
    focus: string[];
  };
};

export function ExerciseCard({ exercise }: Props) {
  return (
    <li className="flex items-center gap-1 rounded-xl border-2 p-2">
      <MdDragIndicator size={32} />
      <Sheet>
        <SheetTrigger asChild>
          <div className="w-full cursor-pointer">
            <h2 className="text-xl uppercase sm:text-2xl lg:text-3xl">
              {exercise.title}
            </h2>
            <p className="font-mono text-muted-foreground">{exercise.time}</p>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-3xl">{exercise.title}</SheetTitle>
            <SheetDescription>{exercise.instructions}</SheetDescription>
          </SheetHeader>
          <section className="mt-2">
            <h2>Focus Area</h2>
            <div className="mt-2 flex flex-wrap items-center gap-1">
              {exercise.focus.map((area, index) => (
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
