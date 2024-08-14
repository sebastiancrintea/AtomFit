import { NavigateBackButton } from "@/components/shared/NavigateBackButton";
import { Button } from "@/components/ui/button";
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
  params: { id: string };
};

export default function SingleWorkout({ params }: Props) {
  return (
    <>
      <section className="h-full w-full space-y-2 rounded-xl border-2 bg-popover p-2">
        <section className="relative aspect-video rounded-xl bg-secondary">
          <div className="absolute top-0 flex items-center gap-2 rounded-br-xl rounded-tl-xl bg-primary p-2">
            <NavigateBackButton />
            <h1 className="text-xl uppercase lg:text-4xl">Workout Title</h1>
          </div>
          <div className="absolute bottom-2 left-2 hidden border-l-4 border-primary p-2 sm:block">
            <h4 className="font-mono">20 mins | 16 Exercises</h4>
          </div>
          <div className="absolute bottom-2 right-2">
            <Button className="font-mono text-xl font-semibold uppercase">
              Start
            </Button>
          </div>
        </section>
        <div className="border-l-4 border-primary px-2 sm:hidden">
          <h4 className="font-mono text-base">20 mins | 16 Exercises</h4>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-1 rounded-xl border-2 p-2">
            <MdDragIndicator size={32} />
            <Sheet>
              <SheetTrigger asChild>
                <div className="w-full cursor-pointer">
                  <h2 className="text-xl uppercase sm:text-2xl lg:text-3xl">
                    Jumping Jacks
                  </h2>
                  <p className="font-mono text-muted-foreground">00:20</p>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </li>

          <li className="flex items-center gap-1 rounded-xl border-2 p-2">
            <MdDragIndicator size={32} />
            <div className="w-full">
              <h2 className="text-xl uppercase sm:text-2xl lg:text-3xl">
                Mountain Climber
              </h2>
              <p className="font-mono text-muted-foreground">x16</p>
            </div>
          </li>
          <li className="flex items-center gap-1 rounded-xl border-2 p-2">
            <MdDragIndicator size={32} />
            <div className="w-full">
              <h2 className="text-xl uppercase sm:text-2xl lg:text-3xl">
                Abdominal Crunches
              </h2>
              <p className="font-mono text-muted-foreground">x16</p>
            </div>
          </li>
          <li className="flex items-center gap-1 rounded-xl border-2 p-2">
            <MdDragIndicator size={32} />
            <div className="w-full">
              <h2 className="text-xl uppercase sm:text-2xl lg:text-3xl">
                Leg Raises
              </h2>
              <p className="font-mono text-muted-foreground">x16</p>
            </div>
          </li>
          <li className="flex items-center gap-1 rounded-xl border-2 p-2">
            <MdDragIndicator size={32} />
            <div className="w-full">
              <h2 className="text-xl uppercase sm:text-2xl lg:text-3xl">
                Plank
              </h2>
              <p className="font-mono text-muted-foreground">00:20</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
