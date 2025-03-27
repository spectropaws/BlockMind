import { z } from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const imageUploadSchema = z.object({
  image: z
    .instanceof(File)
    .refine((file) => {
      console.log(file);
      return file.size <= MAX_FILE_SIZE;
    }, `Max file size is 10MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    ),
});
