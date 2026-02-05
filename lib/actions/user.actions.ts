'use server';

import { signInFormSchema } from "../validator";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// sign in the user with credentials
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
    try {
        const user = signInFormSchema.parse({
            email: formData.get("email")?.toString() || "",
            password: formData.get("password")?.toString() || "",
        });

        await signIn('credentials', user)
        return { success: true, message: "Signed in successfully" }; 


    } catch (error) {
        if (isRedirectError(error)) {
            throw error; // re-throw redirect errors
        }
        return { success: false, message: "Failed to sign in. Please check your credentials and try again." };  
    }       
}


// sign out the current user
export async function signOutUser() {
    await signOut();
}