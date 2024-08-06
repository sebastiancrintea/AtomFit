"use client";

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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ExclamationTriangleIcon,
  EyeNoneIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/actions/auth";
import { AiOutlineLoading } from "react-icons/ai";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";
import {
  registerFormDefault,
  registerFormSchema,
  registerFormType,
} from "@/schemas/register-schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaFemale, FaMale } from "react-icons/fa";
import { cn } from "@/lib/utils";

export function RegisterForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<registerFormType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: registerFormDefault,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: register,
  });
  const testing = async (values: registerFormType) => {
    console.log("test");
    console.log(values);
  };
  return (
    <>
      <AnimatePresence mode="popLayout">
        {error && (
          <motion.div
            layout
            key={"error"}
            transition={{ duration: 0.5, type: "spring" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Alert variant={"destructive"}>
              <div className="flex items-center gap-3">
                <ExclamationTriangleIcon className="size-9" />
                <div className="flex-1">
                  <AlertTitle className="text-xl font-semibold uppercase">
                    <h2 className="text-2xl">Error</h2>
                  </AlertTitle>
                  <AlertDescription className="text-lg font-semibold leading-5">
                    {error}
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout className="mt-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(testing)}
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
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="text-2xl font-semibold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@example.com"
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
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel
                    htmlFor="password"
                    className="text-2xl font-semibold"
                  >
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="password"
                        {...field}
                        placeholder="********"
                        type={isVisible ? "text" : "password"}
                        className="pr-10 text-base"
                      />
                      <Button
                        type="button"
                        variant={"ghost"}
                        size={"icon"}
                        className="absolute bottom-0 right-0"
                        onClick={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel
                    htmlFor="cpassword"
                    className="text-2xl font-semibold"
                  >
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="cpassword"
                        {...field}
                        placeholder="********"
                        type={isVisible ? "text" : "password"}
                        className="pr-10 text-base"
                      />
                      <Button
                        type="button"
                        variant={"ghost"}
                        size={"icon"}
                        className="absolute bottom-0 right-0"
                        onClick={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                      </Button>
                    </div>
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
                    <ul className="space-y-1">
                      <li>
                        <Button
                          type="button"
                          onClick={() => field.onChange("lose")}
                          variant={
                            field.value === "lose" ? "default" : "outline"
                          }
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
                          variant={
                            field.value === "gain" ? "default" : "outline"
                          }
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
                  <FormLabel className="text-2xl font-semibold">
                    Gender
                  </FormLabel>
                  <FormControl>
                    <ul className="flex w-full items-center gap-2">
                      <li className="w-full">
                        <Button
                          type="button"
                          onClick={() => field.onChange("male")}
                          variant={
                            field.value === "male" ? "default" : "outline"
                          }
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
                  <FormLabel
                    htmlFor="height"
                    className="text-2xl font-semibold"
                  >
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
                  <FormLabel className="text-2xl font-semibold">
                    Weight
                  </FormLabel>
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
              type="submit"
              disabled={isPending}
              className="group w-full text-xl font-bold transition-all"
            >
              {isPending ? (
                <AiOutlineLoading className="animate-spin" />
              ) : (
                <>
                  SIGN UP
                  <IoLogIn
                    size={28}
                    className="relative ml-1 transition-all group-hover:translate-x-1"
                  />
                </>
              )}
            </Button>

            <section className="flex items-center justify-between">
              <p>Already a member ?</p>
              <Button
                type="button"
                asChild
                variant={"outline"}
                size={"sm"}
                className="text-sm font-semibold"
              >
                <Link href={"/auth/login"}>SIGN IN</Link>
              </Button>
            </section>
          </form>
        </Form>
      </motion.div>
    </>
  );
}
