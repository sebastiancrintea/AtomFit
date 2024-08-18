import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CreateWorkoutForm } from "./create-workout-form";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  children: React.ReactNode;
};

export function CreateWorkoutDrawer({ children }: Props) {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Create a new Workout</DrawerTitle>
            <DrawerDescription>
              Here you can create a new personalized workout for you or the
              public.
            </DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="h-[75vh] overflow-auto px-4 pb-4">
            <CreateWorkoutForm />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </>
  );
}
