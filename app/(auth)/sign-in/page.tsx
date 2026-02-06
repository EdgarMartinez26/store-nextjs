import { Metadata } from "next";
import CredentialsSignInForm from "./credentials-signin-form";
import { auth } from '@/auth';
import { redirect } from "next/navigation";

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
    
    if (session) { redirect("/");}

    return ( 
        <div className="">
           <CredentialsSignInForm />
        </div>
     );
}
 
export default SignInPage;