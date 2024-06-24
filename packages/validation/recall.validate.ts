import { z } from 'zod';

/**
 * Defines a Zod schema for recalling an item, including the recall ID, reasons for recall, and supporters.
 * - `recallId`: A required string representing the recall ID.
 * - `reasons`: A required string describing the reasons for recall.
 * - `supporters`: An array of strings representing supporters, with at least one supporter required.
 */
export const recallSchema = z.object({
  recallId: z.string().min(1, "Recall ID is required"),
  reasons: z.string().min(1, "Reasons for recall are required"),
  supporters: z.array(z.string()).min(1, "At least one supporter is required"),
});
