"use client";
import { createExercise } from "@/actions/exercise";
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

const exercises = [
  {
    id: 1,
    name: "pushups",
    description: "dsamjdwnja",
    video_url: "sadawdaw",
    type: "duration",
    muscles: ["chest", "traps"],
  },
  {
    id: 2,
    name: "snajdnjaw",
    description: "sanjkdbawjkdjaw",
    video_url: "sadawdaw",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 3,
    name: "legs something",
    description: "sbahjdbhjwabdjhkaw",
    video_url: "snahkdbhjkwada",
    type: "duration",
    muscles: ["chest", "traps"],
  },
  {
    id: 4,
    name: "thnig",
    description: "sanjkdbjadjaw",
    video_url: "sanjkdawhdwa",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 4,
    name: "thnig",
    description: "sanjkdbjadjaw",
    video_url: "sanjkdawhdwa",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 4,
    name: "thnig",
    description: "sanjkdbjadjaw",
    video_url: "sanjkdawhdwa",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 4,
    name: "thnig",
    description: "sanjkdbjadjaw",
    video_url: "sanjkdawhdwa",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 4,
    name: "thnig",
    description: "sanjkdbjadjaw",
    video_url: "sanjkdawhdwa",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 4,
    name: "thnig",
    description: "sanjkdbjadjaw",
    video_url: "sanjkdawhdwa",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 4,
    name: "thnig",
    description: "sanjkdbjadjaw",
    video_url: "sanjkdawhdwa",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
];

export function CreateWorkoutForm() {
  const form = useForm<createWorkoutType>({
    resolver: zodResolver(createWorkoutSchema),
    defaultValues: createWorkoutDefault,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createExercise,
  });

  const onSubmit = async (values: createWorkoutType) => {
    // const data = await mutateAsync();
    // if (data.error) return;
    // form.reset();
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
            name="exercises"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">
                  Exercises
                </FormLabel>
                <FormControl>
                  <>
                    <Command className="border-2">
                      <CommandInput placeholder="Search a muscle group" />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Muscle Group">
                          <ScrollArea className="h-[200px]">
                            {exercises.map((exercise, index) => (
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
                                    field.onChange([...field.value, exercise]);
                                  }
                                  // console.log(form.getValues("exercises"));
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
                            ))}
                          </ScrollArea>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </>
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          {/* {form.getValues("exercise_time").map((_, index) => (
            <div className="space-y-1 pt-2" key={index}>
              {field.value.length > 0 &&
                field.value.map((exercise, index) => {
                  const current = field.value.map((_exercise) => {
                    return { id: _exercise.id };
                  });
                  console.log(form.getValues("exercise_time"));
                  return (
                    <div key={index} className="flex items-center gap-1">
                      <div className="relative flex-1">
                        <Input
                          type="number"
                          className={`flex-1 text-base ${exercise.type === "repeats" ? "pl-12" : "pl-24"}`}
                          placeholder={
                            exercise.type === "repeats" ? "16" : "00:20"
                          }
                          onChange={(e) => {
                            form.setValue("exercise_time", [...current, {}]);
                            return {
                              id: exercise.id,
                              time: e.target.value,
                            };
                          }}
                        />
                        <Button
                          variant={"secondary"}
                          className="absolute bottom-0 left-0"
                        >
                          {exercise.type === "repeats" ? "x" : "seconds"}
                        </Button>
                      </div>

                      <Badge
                        variant={"secondary"}
                        className="flex-1 cursor-default select-none justify-between font-mono text-base uppercase"
                      >
                        <span>{exercise.name}</span>
                        <IoIosCloseCircle
                          size={24}
                          className="cursor-pointer transition-all hover:brightness-75"
                          onClick={() => {
                            const current = field.value.filter(
                              (key) => key !== exercise,
                            );
                            field.onChange([...current]);
                          }}
                        />
                      </Badge>
                    </div>
                  );
                })}
            </div>
          ))} */}

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
