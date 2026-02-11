import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine((value) => {
    const num = Number(value);
    return !Number.isNaN(num) && formatNumberWithDecimal(num) === value;
  }, {
    message: "Price must have exactly two decimal places",
  })
  .transform((value) => Number(value)); // ✅ convert to number


// Zod schema for Product
export const insertProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  slug: z.string().min(1, "Product slug is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  images: z
    .array(z.string().url("Each image must be a valid URL"))
    .min(1, "At least one image is required"),
  price: currency,
  originalPrice: z.number().nonnegative("Original price must be non-negative"),
  brand: z.string().min(1, "Brand is required"),
  rating: z.number().min(0, "Rating must be at least 0").max(5, "Rating cannot exceed 5"),
  numReviews: z.number().nonnegative("Number of reviews must be non-negative"),
  stock: z.number().nonnegative("Stock must be non-negative"),
  isFeatured: z.boolean(),
  bannerUrl: z.string().url("Banner URL must be a valid URL").nullable().optional(),
  tags: z.array(z.string()).optional(),
  sizes: z.array(z.string()).optional(),
  colors: z.array(z.string()).optional(),
  discount: z.number().min(0, "Discount must be at least 0").max(100, "Discount cannot exceed 100"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});



//Schema for signing users in
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

//Schema for Sign Up 
export const signUpFormSchema = z.object({
  name: z.string().min(3, "Name Must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "password dont match",
  path: ["confirmPassword"],
} );