import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GoGoal } from "react-icons/go";
import { UpdateGoalsForm } from "./update-goals-form";

export function UpdateGoals() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="gap-1 text-xl font-semibold">
            Update Goals <GoGoal size={28} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update your goals</DialogTitle>
            <DialogDescription>
              Change your goals so it suits better your journey.
            </DialogDescription>
          </DialogHeader>
          <UpdateGoalsForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
