import { defineCollection, z } from "astro:content";

export const collections = {
  anlaesse: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      datum: z.date(),
      ort: z.string(),
    }),
  }),
};
