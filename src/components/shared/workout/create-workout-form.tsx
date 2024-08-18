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
import { FaClock } from "react-icons/fa";
import { TiArrowRepeatOutline } from "react-icons/ti";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    id: 6,
    name: "Machine Learning Basics",
    description:
      "An introductory video on the key concepts of machine learning and how they are applied.",
    video_url: "https://example.com/videos/machine-learning-basics",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 7,
    name: "Responsive Web Design",
    description:
      "Learn how to create websites that work on all devices using responsive design techniques.",
    video_url: "https://example.com/videos/responsive-web-design",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 8,
    name: "Version Control with Git",
    description:
      "A guide to using Git for version control, covering the basics and advanced features.",
    video_url: "https://example.com/videos/version-control-with-git",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 9,
    name: "Introduction to Kubernetes",
    description:
      "Learn the basics of Kubernetes and how to deploy and manage containerized applications.",
    video_url: "https://example.com/videos/introduction-to-kubernetes",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 10,
    name: "SQL for Beginners",
    description:
      "An introductory video on SQL, the standard language for managing and querying databases.",
    video_url: "https://example.com/videos/sql-for-beginners",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 11,
    name: "Introduction to Blockchain",
    description:
      "A beginner's guide to understanding the basics of blockchain technology and its applications.",
    video_url: "https://example.com/videos/introduction-to-blockchain",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 12,
    name: "Building Web Apps with React",
    description:
      "Learn how to build dynamic web applications using the React JavaScript library.",
    video_url: "https://example.com/videos/building-web-apps-with-react",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 13,
    name: "Cybersecurity Fundamentals",
    description:
      "An overview of essential cybersecurity practices to protect data and systems.",
    video_url: "https://example.com/videos/cybersecurity-fundamentals",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 14,
    name: "Agile Project Management",
    description:
      "Understand the principles of Agile project management and how to apply them in real projects.",
    video_url: "https://example.com/videos/agile-project-management",
    type: "repeats",
    muscles: ["chest", "traps"],
  },
  {
    id: 15,
    name: "Data Visualization with Tableau",
    description:
      "Learn how to create compelling data visualizations using Tableau.",
    video_url: "https://example.com/videos/data-visualization-with-tableau",
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
    const body = {
      ...values,
      exercises: values.exercises.map((exercise) => {
        return { ...exercise, time: parseInt(exercise.time) };
      }),
    };
    console.log(body);
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
                                    field.onChange([
                                      ...field.value,
                                      { ...exercise, time: "" },
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
                            ))}
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
                                  name={`exercises.${index}.time` as const}
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
                                              {exercise.type === "repeats" ? (
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
                                            {exercise.type}
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
