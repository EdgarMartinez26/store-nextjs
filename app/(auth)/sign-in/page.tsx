import { Metadata } from "next";
import CredentialsSignInForm from "./credentials-signin-form";
import { auth } from '@/auth';
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Sign In",
};

const SignInPage = async () => {
    const session = await auth();
    
    if (session) { redirect("/");}

    return ( 
        <div className="">
           <CredentialsSignInForm />
        </div>
     );
}
 
export default SignInPage;