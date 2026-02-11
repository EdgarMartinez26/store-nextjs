export const SERVER_URL = process.env.NEXT_PUBLIC_SEVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT = 12;

//format errros
//esLint - disables - next -line  @attypescrupt-eslint/no-explicit-any
export async function formatZodErrors(error: any) {
    if (error.name  === "ZodError") {
       //handle zod error
        const fieldErrors = Object.keys(error.errors).map((field) => {
           return error.errors[field].message;
        }); 
        return fieldErrors;
    }else if(error.name === "PrismaClientKnownRequestError" && error.code === "P2002"){
        //handle Prisma Error

    }else{
        //handle other errors

    }
    return error;
}   