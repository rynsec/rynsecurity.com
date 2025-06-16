import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["en", "tr"]),
    date: z.string(),
  }),
});

export const collections = {
  blog,
};
