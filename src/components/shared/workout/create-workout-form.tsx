"use client";
import { getExercises } from "@/actions/exercise";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaCheck } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { IoIosCloseCircle } from "react-icons/io";
import {
  createWorkoutDefault,
  createWorkoutSchema,
  createWorkoutType,
} from "@/schemas/create-workout-schema";
import { FaClock } from "react-icons/fa";
import { TiArrowRepeatOutline } from "react-icons/ti";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { createWorkout } from "@/actions/workout";
import { Textarea } from "@/components/ui/textarea";

type Exercise = {
  id: number;
  name: string;
  description: string;
  is_duration: boolean;
  duration: string;
  muscles: string[];
  tutorial_link: string;
  user_id: number;
  created_at: string;
};

export function CreateWorkoutForm() {
  const form = useForm<createWorkoutType>({
    resolver: zodResolver(createWorkoutSchema),
    defaultValues: createWorkoutDefault,
  });

  const { data: exercises, isLoading } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => getExercises(),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createWorkout,
  });

  const onSubmit = async (values: createWorkoutType) => {
    const body = {
      ...values,
      exercises: values.exercises.map((exercise) => {
        return {
          exercise_id: exercise.id,
          duration: parseInt(exercise.duration),
        };
      }),
    };
    const data = await mutateAsync(body);
    if (data.error) return;
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
          <FormField
            control={form.control}
            name="exercises"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">
                  Exercises
                </FormLabel>
                <FormControl>
                  <>
                    <Command className="border-2">
                      <CommandInput placeholder="Search a exercise" />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Exercises">
                          <ScrollArea className="h-[200px]">
                            {exercises?.map(
                              (exercise: Exercise, index: number) => (
                                <CommandItem
                                  key={index}
                                  className="flex items-center justify-between font-mono text-base uppercase"
                                  onSelect={() => {
                                    if (
                                      field.value.some(
                                        (value) => value.id === exercise.id,
                                      )
                                    ) {
                                      const current = field.value.filter(
                                        (value) => value.id !== exercise.id,
                                      );
                                      field.onChange([...current]);
                                    } else {
                                      field.onChange([
                                        ...field.value,
                                        { ...exercise, duration: "" },
                                      ]);
                                    }
                                  }}
                                >
                                  {exercise.name}
                                  <FaCheck
                                    className={`opacity-0 transition-all ${
                                      field.value.some(
                                        (value) => value.id === exercise.id,
                                      ) && "opacity-100"
                                    }`}
                                  />
                                </CommandItem>
                              ),
                            )}
                          </ScrollArea>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                    <TooltipProvider>
                      <div className="space-y-1 pt-2">
                        {field.value.map((exercise, index) => {
                          return (
                            <Tooltip key={index}>
                              <div className="flex items-center gap-2 rounded-xl border-2 bg-popover px-4 py-2">
                                <FormField
                                  control={form.control}
                                  name={`exercises.${index}.duration`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <div className="relative flex-1">
                                          <Input
                                            {...field}
                                            className="min-w-24 pl-11"
                                            type="number"
                                            inputMode="numeric"
                                            min={1}
                                            max={300}
                                          />
                                          <TooltipTrigger asChild>
                                            <Button
                                              size={"icon"}
                                              variant={"secondary"}
                                              className="absolute bottom-0 left-0 text-lg"
                                            >
                                              {!exercise.is_duration ? (
                                                <TiArrowRepeatOutline
                                                  size={26}
                                                />
                                              ) : (
                                                <FaClock size={26} />
                                              )}
                                            </Button>
                                          </TooltipTrigger>
                                          <TooltipContent
                                            className="font-mono text-lg font-semibold uppercase"
                                            side="left"
                                          >
                                            {!exercise.is_duration
                                              ? "Repeats"
                                              : "Duration"}
                                          </TooltipContent>
                                        </div>
                                      </FormControl>
                                    </FormItem>
                                  )}
                                />
                                <Badge
                                  variant={"secondary"}
                                  className="flex-1 items-center justify-between font-mono text-lg uppercase"
                                >
                                  <span className="flex-1">
                                    {exercise.name}
                                  </span>
                                  <IoIosCloseCircle
                                    size={24}
                                    className="cursor-pointer transition-all hover:brightness-75"
                                    onClick={() => {
                                      const current = field.value.filter(
                                        (key) => key.id !== exercise.id,
                                      );
                                      field.onChange([...current]);
                                    }}
                                  />
                                </Badge>
                              </div>
                            </Tooltip>
                          );
                        })}
                      </div>
                    </TooltipProvider>
                  </>
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />

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
