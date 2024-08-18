import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreateExerciseForm } from "./create-exercise-form";

type Props = {
  children: React.ReactNode;
};

export function CreateExerciseDrawer({ children }: Props) {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-2xl">
              Create a new Exercise
            </DrawerTitle>
            <DrawerDescription>
              Here you can provide our application with a new exercise. Thank
              you for your support.
            </DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="h-[75vh] overflow-auto px-4 pb-4">
            <CreateExerciseForm />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </>
  );
}
