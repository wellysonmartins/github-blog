import { z } from "zod";

export const searchInputSchema = z.object({
  query: z.string(),
});

export type SearchInputType = z.infer<typeof searchInputSchema>;