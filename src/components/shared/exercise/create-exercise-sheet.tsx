import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CreateExerciseForm } from "./create-exercise-form";

type Props = {
  children: React.ReactNode;
};

export function CreateExerciseSheet({ children }: Readonly<Props>) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="md:text-2xl">
              Create a new Exercise
            </SheetTitle>
            <SheetDescription>
              Here you can provide our application with a new exercise. Thank
              you for your support.
            </SheetDescription>
          </SheetHeader>
          <CreateExerciseForm />
        </SheetContent>
      </Sheet>
    </>
  );
}
