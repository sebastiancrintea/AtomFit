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
import { Textarea } from "@/components/ui/textarea";
import {
  createExerciseDefault,
  createExerciseSchema,
  createExerciseType,
  MuscleGroups,
} from "@/schemas/create-exercise-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { RxLapTimer } from "react-icons/rx";
import { TiArrowRepeatOutline } from "react-icons/ti";
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

export function CreateExerciseForm() {
  const form = useForm<createExerciseType>({
    resolver: zodResolver(createExerciseSchema),
    defaultValues: createExerciseDefault,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createExercise,
  });

  const onSubmit = async (values: createExerciseType) => {
    const body = {
      ...values,
      is_duration: values.is_duration === "duration" ? true : false,
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
                    placeholder="Push-Ups"
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
                  Instructions
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Lay prone on the ground with arms supporting your body."
                    className="text-base"
                  />
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="is_duration"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-2xl font-semibold">Type</FormLabel>
                <FormControl>
                  <ul className="flex w-full items-center gap-2">
                    <li className="w-full">
                      <Button
                        type="button"
                        onClick={() => field.onChange("duration")}
                        variant={
                          field.value === "duration" ? "default" : "outline"
                        }
                        className="h-12 w-full rounded-xl text-2xl font-semibold tracking-tight transition-all"
                      >
                        <RxLapTimer className="mr-1" />
                        Duration
                      </Button>
                    </li>
                    <li className="w-full">
                      <Button
                        type="button"
                        onClick={() => field.onChange("repeats")}
                        variant={
                          field.value === "repeats" ? "default" : "outline"
                        }
                        className="h-12 w-full rounded-xl text-2xl font-semibold tracking-tight transition-all"
                      >
                        <TiArrowRepeatOutline className="mr-1" />
                        Repeats
                      </Button>
                    </li>
                  </ul>
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tutorial_link"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">
                  Tutorial YT Video
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="https://www.youtube.com/watch?v=d1YBv2mWll0"
                    className="text-base"
                  />
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="muscles"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">
                  Muscle Group
                </FormLabel>
                <FormControl>
                  <Command className="border-2">
                    <CommandInput placeholder="Search a muscle group" />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Muscle Group">
                        <ScrollArea className="h-[200px]">
                          {MuscleGroups.map((key, index) => (
                            <CommandItem
                              key={index}
                              className="flex items-center justify-between font-mono text-base uppercase"
                              onSelect={() => {
                                if (!field.value.includes(key)) {
                                  field.onChange([...field.value, key]);
                                } else {
                                  const current = field.value.filter(
                                    (value) => key !== value,
                                  );
                                  field.onChange([...current]);
                                }
                              }}
                            >
                              {key}
                              <FaCheck
                                className={`opacity-0 transition-all ${field.value.includes(key) && "opacity-100"}`}
                              />
                            </CommandItem>
                          ))}
                        </ScrollArea>
                      </CommandGroup>
                    </CommandList>
                    <div className="flex flex-wrap items-center gap-1 p-2">
                      {field.value.length > 0 &&
                        field.value.map((value, index) => (
                          <Badge
                            key={index}
                            variant={"secondary"}
                            className="cursor-default select-none gap-1 font-mono text-base uppercase"
                          >
                            <span>{value}</span>
                            <IoIosCloseCircle
                              size={24}
                              className="cursor-pointer transition-all hover:brightness-75"
                              onClick={() => {
                                const current = field.value.filter(
                                  (key) => key !== value,
                                );
                                field.onChange([...current]);
                              }}
                            />
                          </Badge>
                        ))}
                    </div>
                  </Command>
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
