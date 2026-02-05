// import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import {prisma} from "@/lib/prisma";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { compareSync } from "bcrypt-ts-edge";
// import type { NextAuthConfig } from "next-auth";

// export const config = {
//     pages: {
//         signIn: '/sign-in',
//         error: '/sign-in'
//     },
//     session: {
//         strategy: 'jwt',
//         maxAge: 30 * 24 * 60 * 60, // 30 days
//     },
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         // add your providers here
//         CredentialsProvider({
//             credentials: { 
//                 email: {type: 'email'},
//                 password: {type: 'password'},
//         },
//         async authorize(credentials) {
//             if(credentials == null) return null;
//             //find user in database
//             const user = await prisma.user.findUnique({
//                 where: {
//                     email: credentials.email as string,
//                 }
//      })
//      //IF user Exists and password matches
//         if(user && user.password) {
//             const isMatch = compareSync(credentials.password as string, user.password);
            
//             //  If password is correct, return user object
//             if(isMatch) {
//                 return {
//                     id: user.id,
//                     email: user.email,
//                     name: user.name,
//                     role: user.role
//                 };
//             }
//         }
//         // fi user does not exist or password does not match
//         return  null;
//         }
//     }),
//     ],
//     callback: {
//         async session({ session, user, trigger, token }: any) {
//             // Set user id from the token
//             session.user.id = token.sub;

//             // if an update lets set user name
//             if (trigger === 'update') {
//                 session.user.name = user.name;
//         }
//         return session; 
//   },
//     }
// } satisfies NextAuthConfig;


// export const {handlers, auth, signIn, signOut} = NextAuth(config);
