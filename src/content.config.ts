import { defineCollection, reference, z } from "astro:content";
import { glob, file } from 'astro/loaders';

// Books
const books = defineCollection({
  loader: glob({ pattern: '**/*{md,mdx}', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    translater: z.string().optional(),
    illustrator: z.string().optional(),
    page: z.number(),
    isbn: z.string(),
    publishDate: z.coerce.date(),
    publisher: z.string(),
    addDate: z.coerce.date(),
    amazonLink: z.string().optional(),
    kindleLink: z.string().optional(),
    audibleLink: z.string().optional(),
    otherLink: z.object({
      url: z.string(),
      siteName: z.string()
    }).optional(),
  }),
});

// Shelves
const shelves = defineCollection({
  loader: glob({ pattern: '**/*{md,mdx}', base: './src/content/shelves' }),
  schema: z.object({
    theme: z.string(),
    layout: z.enum(['1-1', '1-2', '3', '8']),
    selectedBooks: z.array(reference('books')),
  }),
});

// 2025
const store2025 = defineCollection({
  loader: glob({ pattern: '**/*{md,mdx}', base: './src/content/store2025' }),
  schema: z.object({
    date: z.coerce.date(),
    theme: z.string(),
    heroBook: reference('books').optional(),
    type: z.enum(['shelves', 'direct']),
    selectedShelves: z.array(reference('shelves')).default([]),
    text: z.string().optional(),
  }),
});

export const collections = {
  books,
  shelves,
  store2025,
};
