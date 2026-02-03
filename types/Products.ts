import { z } from "zod";
import { insertProductSchema } from "@/lib/validator";

// Infer the base type from Zod schema
export type Product = z.infer<typeof insertProductSchema> & {
  id?: string; // optional because Prisma generates it
  createdAt?: string; // server-generated, optional
  updatedAt?: string; // server-generated, optional
};

// Full sample data type
export interface SampleDataWomen {
  products: Product[];
}
