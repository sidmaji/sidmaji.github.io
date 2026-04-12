import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      desc: z.string().optional(),
      cover: image(),
      coverAlt: z.string(),
      urls: z.array(z.object({ url: z.string(), label: z.string() })).optional(),
      url: z.string(),
      color: z.string().optional(),
      year: z.number(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
