import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const collections = {
  anlaesse: defineCollection({
    loader: glob({ base: "./src/content/anlaesse", pattern: "*.md" }),
    schema: z.object({
      title: z.string(),
      datum: z.string().transform((s) => new Date(s)),
      ort: z.string(),
      bild: z.array(z.string()).optional(),
    }),
  }),
};
