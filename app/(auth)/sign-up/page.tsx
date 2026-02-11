import { Metadata } from "next";
import { auth } from '@/auth';
import { redirect } from "next/navigation";
import CredentialsSignUpForm from "./credentials-signup-form";

export const metadata: Metadata = {
    title: "Sign Up",
};

const SignUpPage = async (props: {
    searchParams: Promise<{
        callbackUrl?: string;
    }>
}) => {
    const { callbackUrl } = await props.searchParams
    const session = await auth();
    
    if (session) { 
        redirect(callbackUrl || "/");
    }

    return ( 
        <div className="">
           <CredentialsSignUpForm />
        </div>
     );
}
 
export default SignUpPage;