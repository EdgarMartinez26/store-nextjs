import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";

export const config = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in'
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter: PrismaAdapter(prisma),
    providers: [CredentialsProvider({
        credentials: { 
            email: {type: 'email'},
            password: {type: 'password'},
    },  
    async authorize(credentials) {
        if(credentials == null) return null; 

        //find user in database
        const user = await prisma.user.findUnique({
            where: {
                email: credentials.email as string,
            }
        });
        //IF user Exists and password matches
        if(user && user.password) {
            const isMatch = compareSync(credentials.password as string, user.password);
            
            //  If password is correct, return user object
            if(isMatch) {
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                };
            }
        }
        // fi user does not exist or password does not match
        return  null;
    }
})],
callbacks: {
  async jwt({ token, user }) {
    if (
      user &&
      typeof user === "object" &&
      "id" in user &&
      "role" in user &&
      typeof user.role === "string"
    ) {
      token.sub = user.id;
      token.role = user.role;
    }
    return token;
  },

  async session({ session, token }) {
    session.user.id = token.sub!;

    if (typeof token.role === "string") {
      session.user.role = token.role;
    }

    return session;
  },
},

} satisfies NextAuthConfig;

export const {handlers, auth, signIn, signOut} = NextAuth(config);

