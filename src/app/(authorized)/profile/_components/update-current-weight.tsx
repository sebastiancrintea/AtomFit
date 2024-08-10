import { updateCurrentWeight } from "@/actions/profile";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { GiWeightScale } from "react-icons/gi";

export function UpdateWeightDialog() {
  const [currentWeight, setCurrentWeight] = useState<number>(0);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateCurrentWeight,
  });

  const onSubmit = async () => {
    const data = await mutateAsync(currentWeight);
    if (data.error) return;
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className="gap-1 text-xl font-semibold"
            onClick={() => setCurrentWeight(0)}
          >
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="space-y-1"
          >
            <Label htmlFor="weight" className="text-xl">
              Current Weight
            </Label>
            <div className="relative">
              <Input
                min={30}
                max={300}
                step={"0.1"}
                id="weight"
                type="number"
                inputMode="numeric"
                className="pr-14"
                value={currentWeight}
                onChange={(e) => setCurrentWeight(parseFloat(e.target.value))}
              />
              <Button
                variant={"ghost"}
                type="button"
                className="absolute bottom-0 right-0"
              >
                kg
              </Button>
            </div>
            <div className="flex justify-between pt-1">
              <DialogClose asChild>
                <Button variant={"secondary"} type="button" className="text-lg">
                  Cancel
                </Button>
              </DialogClose>

              <Button className="text-lg transition-all" type="submit">
                {isPending ? (
                  <AiOutlineLoading className="animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
