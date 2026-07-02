import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./content" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const meta = defineCollection({
  loader: glob({ pattern: "**/meta.json", base: "./content" }),
  schema: z.object({
    title: z.string(),
    defaultOpen: z.boolean().optional(),
    pages: z.array(z.string()),
    badges: z.record(z.string(), z.enum(["new", "updated"])).optional(),
  }),
});

export const collections = { docs, meta };
