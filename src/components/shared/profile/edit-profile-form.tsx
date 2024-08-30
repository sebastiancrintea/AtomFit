"use client";

import { editProfile } from "@/actions/profile";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  editProfileFormDefault,
  editProfileFormSchema,
  editProfileFormType,
} from "@/schemas/edit-profile-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { FaFemale, FaMale } from "react-icons/fa";

export function EditProfileForm() {
  const form = useForm<editProfileFormType>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: editProfileFormDefault,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: editProfile,
  });

  const onSubmit = async (values: editProfileFormType) => {
    const data = await mutateAsync(values);
    if (data.error) return;
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
            name="username"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="@johnDoe"
                    {...field}
                    className="text-base"
                  />
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
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
            name="is_male"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-2xl font-semibold">Gender</FormLabel>
                <FormControl>
                  <ul className="flex w-full items-center gap-2">
                    <li className="w-full">
                      <Button
                        type="button"
                        onClick={() => field.onChange("male")}
                        variant={field.value === "male" ? "default" : "outline"}
                        className="h-12 w-full rounded-xl text-2xl font-semibold tracking-tight transition-all"
                      >
                        <FaMale />
                        Male
                      </Button>
                    </li>
                    <li className="w-full">
                      <Button
                        type="button"
                        onClick={() => field.onChange("female")}
                        variant={
                          field.value === "female" ? "default" : "outline"
                        }
                        className="h-12 w-full rounded-xl text-2xl font-semibold tracking-tight transition-all"
                      >
                        <FaFemale />
                        Female
                      </Button>
                    </li>
                  </ul>
                </FormControl>
                <FormDescription className="text-sm">
                  Please select which sex we should use to calculate your{" "}
                  <span className="underline">calorie</span> needs.
                </FormDescription>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel htmlFor="age" className="text-2xl font-semibold">
                  Age
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="age"
                      inputMode="numeric"
                      min={16}
                      max={90}
                      type="number"
                      placeholder="18"
                      {...field}
                      className="pr-20 text-base"
                    />
                    <Button
                      type="button"
                      variant={"ghost"}
                      className="absolute bottom-0 right-0"
                    >
                      years
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel htmlFor="height" className="text-2xl font-semibold">
                  Height
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="height"
                      inputMode="numeric"
                      min={100}
                      max={300}
                      type="number"
                      placeholder="170"
                      {...field}
                      className="pr-16 text-base"
                    />
                    <Button
                      type="button"
                      variant={"ghost"}
                      className="absolute bottom-0 right-0"
                    >
                      cm
                    </Button>
                  </div>
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
