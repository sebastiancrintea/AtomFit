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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  reviewWorkoutDefault,
  reviewWorkoutSchema,
  reviewWorkoutType,
} from "@/schemas/review-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { GoStar, GoStarFill } from "react-icons/go";

type Props = {
  workoutId: number;
};

export function ReviewWorkoutForm({ workoutId }: Props) {
  const router = useRouter();
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
    router.refresh();

    if (data.error) return;
    form.reset();
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
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-2xl font-semibold">
                  Rate this workout!
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center justify-center gap-4"
                  >
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <RadioGroupItem value="1" className="hidden" />
                      </FormControl>
                      <FormLabel className="relative scale-95 cursor-pointer font-normal transition-all hover:scale-100">
                        <GoStarFill
                          size={32}
                          className={`${parseInt(field.value) >= 1 ? "opacity-100" : "opacity-0"} transition-all`}
                        />
                        <GoStar size={32} className={`absolute left-0 top-0`} />
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <RadioGroupItem value="2" className="hidden" />
                      </FormControl>
                      <FormLabel className="relative scale-95 cursor-pointer font-normal transition-all hover:scale-100">
                        <GoStarFill
                          size={32}
                          className={`${parseInt(field.value) >= 2 ? "opacity-100" : "opacity-0"} transition-all`}
                        />
                        <GoStar size={32} className={`absolute left-0 top-0`} />
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <RadioGroupItem value="3" className="hidden" />
                      </FormControl>
                      <FormLabel className="relative scale-95 cursor-pointer font-normal transition-all hover:scale-100">
                        <GoStarFill
                          size={32}
                          className={`${parseInt(field.value) >= 3 ? "opacity-100" : "opacity-0"} transition-all`}
                        />
                        <GoStar size={32} className={`absolute left-0 top-0`} />
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <RadioGroupItem value="4" className="hidden" />
                      </FormControl>
                      <FormLabel className="relative scale-95 cursor-pointer font-normal transition-all hover:scale-100">
                        <GoStarFill
                          size={32}
                          className={`${parseInt(field.value) >= 4 ? "opacity-100" : "opacity-0"} transition-all`}
                        />
                        <GoStar size={32} className={`absolute left-0 top-0`} />
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <RadioGroupItem value="5" className="hidden" />
                      </FormControl>
                      <FormLabel className="relative scale-95 cursor-pointer font-normal transition-all hover:scale-100">
                        <GoStarFill
                          size={32}
                          className={`${parseInt(field.value) >= 5 ? "opacity-100" : "opacity-0"} transition-all`}
                        />
                        <GoStar size={32} className={`absolute left-0 top-0`} />
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
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
