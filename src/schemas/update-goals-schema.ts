import { z } from "zod";

export const updateGoalsSchema = z.object({
  goal: z.enum(["lose", "maintain", "gain"]),
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

export type updateGoalsType = z.infer<typeof updateGoalsSchema>;

export const updateGoalsDefault = {
  goal: undefined,
  weight: "",
  weight_preference: "",
};
