import { z } from "zod";
import { passwordSchema } from "./password";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export type loginFormType = z.infer<typeof loginFormSchema>;

export const loginFormDefault = {
  email: "",
  password: "",
};
