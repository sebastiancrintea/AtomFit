import { z } from "zod";

export const editProfileFormSchema = z.object({
  username: z.string().min(3).max(20),
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
    .refine((value) => parseFloat(value) >= 30, "You must have more than 30kg.")
    .refine((value) => parseFloat(value) < 300, "I hope you are joking xD."),
  weight_preference: z
    .string()
    .refine((value) => !!parseInt(value), {
      message: "Please enter a number.",
    })
    .refine((value) => parseFloat(value) >= 30, "You must have more than 30kg.")
    .refine((value) => parseFloat(value) < 300, "I hope you are joking xD."),
});

export type editProfileFormType = z.infer<typeof editProfileFormSchema>;

export const editProfileFormDefault = {
  username: "",
  goal: undefined,
  is_male: undefined,
  age: "16",
  height: "150",
  weight: "60.2",
  weight_preference: "70.3",
};
