import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, "Your password must have at least 8 characters")
  .max(50, "Your password can't be longer than 50 characters")
  .refine(
    (password) => /[A-Z]/.test(password),
    "Password must contain at least one uppercase letter",
  )
  .refine(
    (password) => /[0-9]/.test(password),
    "Password must contain at least one number",
  )
  .refine(
    (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
    "Password must contain at least one symbol",
  );
