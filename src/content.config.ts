import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Blog
const blogCollection = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog/2025/", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    date: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

// Books
const bookCollection = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/books/", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    author: z.string(),
    page: z.number(),
    isbn: z.string(),
    publishDate: z.coerce.date(),
    publisher: z.string(),
    addDate: z.coerce.date(),
    amazonLink: z.string().optional(),
    kindleLink: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  books: bookCollection,
};
