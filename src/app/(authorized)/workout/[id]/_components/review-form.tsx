"use client";

import { reviewWorkout } from "@/actions/workout";
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
  reviewWorkoutDefault,
  reviewWorkoutSchema,
  reviewWorkoutType,
} from "@/schemas/review-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";

type Props = {
  workoutId: number;
};

export function ReviewWorkoutForm({ workoutId }: Props) {
  const form = useForm<reviewWorkoutType>({
    resolver: zodResolver(reviewWorkoutSchema),
    defaultValues: reviewWorkoutDefault,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: reviewWorkout,
  });

  const onSubmit = async (values: reviewWorkoutType) => {
    const body = { ...values, rating: parseInt(values.rating) };
    const data = await mutateAsync({ workoutId, body });
    if (data.error) return;
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Very good opinion" />
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">
                  Tell us your opinion
                </FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Tell us your story" />
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
