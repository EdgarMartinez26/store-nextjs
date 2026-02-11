import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Convert Prisma object into JSON serializable object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}

//Format Number with two decimal places
export function formatNumberWithDecimal(num: number): string{
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}

//format errors from zod and prisma
//esLint - disables - next -line  @attypescrupt-eslint/no-explicit-any
export function formatZodErrors(error: any) {
    if (error.name  === "ZodError") {
       //handle zod error
        const fieldErrors = Object.keys(error.errors).map((field) => {
           return error.errors[field].message;
        }); 
        return fieldErrors;
    }else if(error.name === "PrismaClientKnownRequestError" && error.code === "P2002"){
        //handle Prisma Error
        const field = error.meta?.target?.[0] || "unknown field";
        return `Unique constraint failed on the field: ${field}`; 

    }else{
        //handle other errors
      return typeof error === "object" && error !== null && "message" in error
        ? error.message
        : "An unexpected error occurred"; 
    }
    return error;
}   