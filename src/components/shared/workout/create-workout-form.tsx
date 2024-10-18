"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  createWorkoutDefault,
  createWorkoutSchema,
  createWorkoutType,
} from "@/schemas/create-workout-schema";
import { FaClock } from "react-icons/fa";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { createWorkout } from "@/actions/workout";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaCirclePlus } from "react-icons/fa6";
import { SearchBox } from "../search-box";
import { usePathname } from "next/navigation";
import { Exercise } from "@/types/exercise";
import { useRouter } from "next/navigation";
import { IoCloseCircle } from "react-icons/io5";
import { toast } from "sonner";

type Props = {
  exercises: Exercise[];
};

export function CreateWorkoutForm({ exercises }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedExercises, setSelectedExercises] = useState<Exercise[] | []>(
    [],
  );

  const form = useForm<createWorkoutType>({
    resolver: zodResolver(createWorkoutSchema),
    defaultValues: createWorkoutDefault,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createWorkout,
  });

  const onSubmit = async (values: createWorkoutType) => {
    if (selectedExercises.some((exercise) => exercise.duration <= 0)) {
      toast.warning("Please select a duration for all your exercises");
    }
    const body = {
      ...values,
      exercises: selectedExercises.map((exercise) => {
        return {
          exercise_id: exercise.id,
          duration: exercise.duration,
        };
      }),
    };
    const data = await mutateAsync(body);
    if (data.error) return;
    setSelectedExercises([]);
    form.reset();
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Chest Beginner"
                    className="text-base"
                  />
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Chest Beginner"
                    className="text-base"
                  />
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={"secondary"}
                className="flex items-center gap-2 text-2xl"
                onClick={() => router.replace(pathname)}
              >
                Add Exercises
                <FaCirclePlus size={24} />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] min-w-[50vw] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Exercises</DialogTitle>
                <DialogDescription>
                  Search the best exercise for your workout!
                </DialogDescription>
              </DialogHeader>
              <section>
                <div className="mb-1 flex items-center gap-2">
                  <SearchBox placeholder="Search by exercise name" />
                  {/* <ExerciseFilter /> */}
                </div>
                <ScrollArea className="h-[50vh]">
                  {!exercises && <div>No exercise found!</div>}
                  {exercises &&
                    exercises.map((exercise, index) => (
                      <div
                        key={index}
                        className="mb-1 flex items-center justify-between rounded-lg border-2 px-4 py-2"
                      >
                        <div className="space-y-2">
                          <h4>{exercise.name}</h4>
                          <div className="flex flex-wrap items-center gap-1">
                            {exercise.muscles.map((muscle, index) => (
                              <Badge key={index} className="uppercase">
                                {muscle}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {!selectedExercises.some(
                          (selected) => selected.id === exercise.id,
                        ) ? (
                          <Button
                            variant={"secondary"}
                            onClick={() => {
                              setSelectedExercises((current) => [
                                ...current,
                                exercise,
                              ]);
                            }}
                          >
                            Add
                          </Button>
                        ) : (
                          <Button
                            variant={"secondary"}
                            onClick={() => {
                              setSelectedExercises((current) => [
                                ...current.filter(
                                  (selected) => selected.id !== exercise.id,
                                ),
                              ]);
                            }}
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                </ScrollArea>
              </section>
            </DialogContent>
          </Dialog>
          {selectedExercises &&
            selectedExercises.map((exercise, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border-2 p-2"
              >
                <div className="relative">
                  <Input
                    onChange={(e) => (exercise.duration = +e.target.value)}
                    className="min-w-24 pl-11"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={300}
                  />
                  <Button
                    type="button"
                    size={"icon"}
                    variant={"secondary"}
                    className="absolute bottom-0 left-0 text-lg"
                  >
                    {!exercise.is_duration ? (
                      <TiArrowRepeatOutline size={26} />
                    ) : (
                      <FaClock size={26} />
                    )}
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <h4>{exercise.name}</h4>
                  <Button
                    type="button"
                    size={"icon"}
                    variant={"secondary"}
                    onClick={() => {
                      setSelectedExercises((current) => [
                        ...current.filter(
                          (selected) => selected.id !== exercise.id,
                        ),
                      ]);
                    }}
                  >
                    <IoCloseCircle size={32} />
                  </Button>
                </div>
              </div>
            ))}

          <Button
            disabled={isPending}
            type="submit"
            className="group w-full text-xl font-bold transition-all"
          >
            {isPending ? (
              <AiOutlineLoading className="animate-spin" />
            ) : (
              "SUBMIT"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
