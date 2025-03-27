import { z } from "zod";

export const addCalendarSchema = z.object({
  title: z.string().min(1, "Title is rquired"),
  start: z.string().min(1, "Start time required"),
  end: z.string().min(1, "End Time required"),
  location: z.string().optional(),
  description: z.string().min(1, "Description is required"),
});
