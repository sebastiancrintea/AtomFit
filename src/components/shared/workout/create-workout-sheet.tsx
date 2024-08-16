import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CreateWorkoutForm } from "./create-workout-form";

type Props = {
  children: React.ReactNode;
};

export function CreateWorkoutSheet({ children }: Readonly<Props>) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto md:min-w-[500px] lg:min-w-[700px]">
          <SheetHeader>
            <SheetTitle className="md:text-2xl">
              Create a new Workout
            </SheetTitle>
            <SheetDescription>
              Here you can create a new personalized workout for you or the
              public.
            </SheetDescription>
          </SheetHeader>
          <CreateWorkoutForm />
        </SheetContent>
      </Sheet>
    </>
  );
}
