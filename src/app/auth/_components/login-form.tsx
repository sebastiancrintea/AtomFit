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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginFormDefault,
  loginFormSchema,
  loginFormType,
} from "@/schemas/login-schema";
import {
  ExclamationTriangleIcon,
  EyeNoneIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { loginAction } from "@/actions/auth";
import { AiOutlineLoading } from "react-icons/ai";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginFormDefault,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: loginAction,
  });
  const onSubmit = async (values: loginFormType) => {
    const response = await mutateAsync(values);
    if (response?.error) {
      setError(response?.error);
      return setTimeout(() => setError(null), 10000);
    }
    form.reset();
    router.push("/home");
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
                  <h2 className="text-2xl font-semibold uppercase">Error</h2>
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
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-2"
          >
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
            <Button
              disabled={isPending}
              type="submit"
              className="group w-full text-xl font-bold transition-all"
            >
              {isPending ? (
                <AiOutlineLoading className="animate-spin" />
              ) : (
                <>
                  SIGN IN
                  <IoLogIn
                    size={28}
                    className="relative ml-1 transition-all group-hover:translate-x-1"
                  />
                </>
              )}
            </Button>
            <section className="flex items-center justify-between">
              <p>Don&apos;t have an account ?</p>
              <Button
                asChild
                variant={"outline"}
                size={"sm"}
                className="text-sm font-semibold"
              >
                <Link href={"/auth/register"}>SIGN UP</Link>
              </Button>
            </section>
          </form>
        </Form>
      </motion.div>
    </>
  );
}
