import { Metadata } from "next";
import CredentialsSignInForm from "./credentials-signin-form";
import { auth } from '@/auth';
import { redirect } from "next/navigation";
import a1 from "@/public/ast/x3.jpg"

export const metadata: Metadata = {
    title: "Sign In",
};

const SignInPage = async (props: {
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
        <div className="relative w-full h-screen bg-cover bg-bottom" style={{ backgroundImage: `url(${a1.src})` }}>  
            <CredentialsSignInForm />
        </div>
    );
}
 
export default SignInPage;