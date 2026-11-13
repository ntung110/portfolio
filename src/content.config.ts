import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const image = z.object({
  src: z.string().min(1),
  alt: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

const article = {
  title: z.string().min(1),
  description: z.string().min(1),
  readingTime: z.string().min(1),
  image,
};

const pages = defineCollection({
  loader: glob({ base: "./src/content", pattern: "about.md" }),
  schema: z.object({
    name: z.string().min(1),
    headline: z.string().min(1),
    portrait: image,
    experience: z.array(z.object({
      company: z.string().min(1),
      role: z.string().min(1),
      description: z.string().min(1),
    })).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "*.md" }),
  schema: z.object({
    ...article,
    label: z.string().min(1),
    year: z.string().regex(/^\d{4}$/, "Use a quoted four-digit year, e.g. \"2026\""),
    order: z.number().int().default(0),
  }),
});

const writings = defineCollection({
  loader: glob({ base: "./src/content/writings", pattern: "*.md" }),
  schema: z.object({
    ...article,
    date: z.iso.date(),
  }),
});

export const collections = { pages, projects, writings };
