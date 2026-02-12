import { insertCartItemSchema, cartItemSchema } from "@/lib/validator";
import z from "zod";

export type Cart = z.infer<typeof insertCartItemSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
