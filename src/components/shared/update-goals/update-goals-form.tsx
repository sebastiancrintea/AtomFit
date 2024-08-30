"use client";
import { updateGoals } from "@/actions/profile";
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
import {
  updateGoalsDefault,
  updateGoalsSchema,
  updateGoalsType,
} from "@/schemas/update-goals-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";

export function UpdateGoalsForm() {
  const form = useForm<updateGoalsType>({
    resolver: zodResolver(updateGoalsSchema),
    defaultValues: updateGoalsDefault,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateGoals,
  });

  const onSubmit = async (values: updateGoalsType) => {
    const data = await mutateAsync(values);
    if (data.error) return;
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">
                  What&apos;s your goal ?
                </FormLabel>
                <FormControl>
                  <ul className="space-y-2">
                    <li>
                      <Button
                        type="button"
                        onClick={() => field.onChange("lose")}
                        variant={field.value === "lose" ? "default" : "outline"}
                        className="h-12 w-full rounded-xl text-2xl font-semibold tracking-tight transition-all"
                      >
                        Lose Weight
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="button"
                        onClick={() => field.onChange("maintain")}
                        variant={
                          field.value === "maintain" ? "default" : "outline"
                        }
                        className="h-12 w-full rounded-xl text-2xl font-semibold tracking-tight transition-all"
                      >
                        Maintain Weight
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="button"
                        onClick={() => field.onChange("gain")}
                        variant={field.value === "gain" ? "default" : "outline"}
                        className="h-12 w-full rounded-xl text-2xl font-semibold tracking-tight transition-all"
                      >
                        Gain Weight
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
            name="weight"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">Weight</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      step={"0.1"}
                      inputMode="numeric"
                      min={30}
                      max={300}
                      placeholder="70"
                      type="number"
                      {...field}
                      className="pr-16 text-base"
                    />
                    <Button
                      type="button"
                      variant={"ghost"}
                      className="absolute bottom-0 right-0"
                    >
                      kg
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight_preference"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">
                  Weight Goal
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      step={"0.1"}
                      inputMode="numeric"
                      min={30}
                      max={300}
                      type="number"
                      placeholder="70"
                      {...field}
                      className="pr-16 text-base"
                    />
                    <Button
                      type="button"
                      variant={"ghost"}
                      className="absolute bottom-0 right-0"
                    >
                      kg
                    </Button>
                  </div>
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
