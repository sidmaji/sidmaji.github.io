import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from "astro:content";

const projects = defineCollection(
    {
        loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
        schema: ({ image }) => z.object(
            {
                name: z.string(),
                desc: z.string(),
                cover: image().optional(),
                coverAlt: z.string(),
                tags: z.array(z.string()).optional(),
                urls: z.array(z.object({ url: z.string(), label: z.string() })).optional(),
                url: z.string(),
                color: z.string().optional(),
                date: z.coerce.date(),
            }
        )
    }
)

const blog = defineCollection(
    {
        loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
        schema: ({ image }) => z.object(
            {
                title: z.string(),
                desc: z.string().optional(),
                cover: image().optional(),
                coverAlt: z.string().optional(),
                tags: z.array(z.string()).optional(),
                date: z.coerce.date(),
            }
        )
    }
)

const coursework = defineCollection(
    {
        loader: glob({ base: "./src/content/coursework", pattern: "**/*.md" }),
        schema: z.object(
            {
                name: z.string(),
                professor: z.string().optional(),
                quarter: z.string(),
                recommended: z.boolean(),
                date: z.coerce.date(),
            }
        )
    }
)

export const collections = { projects, blog, coursework };
