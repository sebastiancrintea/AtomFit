import { z } from "zod";
import { passwordSchema } from "./password-schema";

export const registerFormSchema = z
  .object({
    username: z.string().min(3).max(20),
    email: z.string().email().max(100),
    password: passwordSchema,
    confirmPassword: z.optional(passwordSchema),
    goal: z.enum(["lose", "maintain", "gain"]),
    is_male: z.enum(["male", "female"]),
    age: z
      .string()
      .refine((value) => !!parseInt(value), {
        message: "Please enter a number.",
      })
      .refine((value) => parseInt(value) >= 16, {
        message: "You have to be at least 16 years old.",
      })
      .refine((value) => parseInt(value) < 80, {
        message: "You are a bit too old.",
      }),
    height: z
      .string()
      .refine((value) => !!parseInt(value), {
        message: "Please enter a number.",
      })
      .refine(
        (value) => parseInt(value) >= 100,
        "You have to be at least 100cm tall.",
      )
      .refine(
        (value) => parseInt(value) < 300,
        "You don't have more than 300cm.",
      ),
    weight: z
      .string()
      .refine((value) => !!parseInt(value), {
        message: "Please enter a number.",
      })
      .refine(
        (value) => parseFloat(value) >= 30,
        "You must have more than 30kg.",
      )
      .refine((value) => parseFloat(value) < 300, "I hope you are joking xD."),
    weight_goal: z
      .string()
      .refine((value) => !!parseInt(value), {
        message: "Please enter a number.",
      })
      .refine(
        (value) => parseFloat(value) >= 30,
        "You must have more than 30kg.",
      )
      .refine((value) => parseFloat(value) < 300, "I hope you are joking xD."),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export type registerFormType = z.infer<typeof registerFormSchema>;

export const registerFormDefault = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  goal: undefined,
  is_male: undefined,
  age: "16",
  height: "150",
  weight: "60.2",
  weight_goal: "70.3",
};
