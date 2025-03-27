import { z } from "zod";

export const recomendationSchema = z.object({
  N: z.coerce.number().min(1, "N is Required"),
  P: z.coerce.number().min(1, "P is Required"),
  K: z.coerce.number().min(1, "K is Required"),
  Temperature: z.string().min(1, "Temperature is Required"),
  Humidity: z.string().min(1, "Humidity is Required"),
  PH: z.coerce
    .number({
      required_error: "pH value is required",
      invalid_type_error: "pH must be a valid number",
    })
    // pH typically ranges from 0 to 14
    .min(0, { message: "pH cannot be less than 0" })
    .max(14, { message: "pH cannot be greater than 14" }),
  RainFall: z.coerce.number().min(1, "RainFall is Required"),
});
