import { z } from "zod";

export const updateWeightSchema = z.object({
  weight: z
    .string()
    .refine((value) => !!parseInt(value), {
      message: "Please enter a number.",
    })
    .refine((value) => parseFloat(value) >= 30, "You must have more than 30kg.")
    .refine((value) => parseFloat(value) < 300, "I hope you are joking xD."),
});

export type updateWeightType = z.infer<typeof updateWeightSchema>;

export const updateWeightDefault = {
  weight: "",
};
