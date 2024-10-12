import { YoutubeEmbed } from "@/components/shared/youtube-embed";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Exercise } from "@/types/exercise";

type Props = {
  exercise: Exercise;
};

export function ExerciseCard({ exercise }: Props) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Card className="cursor-pointer border-2 bg-popover transition-all hover:scale-105">
            <CardHeader className="p-4">
              <div className="mx-auto aspect-square w-full max-w-[250px] rounded-xl bg-secondary"></div>

              <h2 className="overflow-hidden font-mono uppercase">
                {exercise.name}
              </h2>
              <div className="flex flex-wrap gap-1">
                {exercise.muscles.map((muscle, index) => (
                  <Badge key={index}>{muscle}</Badge>
                ))}
              </div>
              <CardDescription className="font-semibold">
                {exercise.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </SheetTrigger>
        <SheetContent className="min-w-[600px]">
          <SheetHeader>
            <SheetTitle className="text-3xl">{exercise.name}</SheetTitle>
          </SheetHeader>
          <section className="mt-2">
            <YoutubeEmbed embedId={exercise.tutorial_link.slice(32)} />
            <h2>Focus Area</h2>
            <div className="mt-2 flex flex-wrap items-center gap-1">
              {exercise.muscles.map((muscle, index) => (
                <Badge key={index} className="text-lg">
                  {muscle}
                </Badge>
              ))}
            </div>
            <p>{exercise.description}</p>
          </section>
        </SheetContent>
      </Sheet>
    </>
  );
}
