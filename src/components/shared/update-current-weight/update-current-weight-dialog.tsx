import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { GiWeightScale } from "react-icons/gi";
import { UpdateCurrentWeightForm } from "./update-current-weight-form";

export function UpdateWeightDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="gap-1 text-xl font-semibold">
            Update <GiWeightScale size={28} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Update your current weight
            </DialogTitle>
            <DialogDescription>
              Here you will want to type your current weight.
            </DialogDescription>
          </DialogHeader>
          <UpdateCurrentWeightForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
