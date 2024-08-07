import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        session: async ({ session }) => {

        },

        signIn: async ({ profile }) => {
            try {
                
            } catch (error) {
                
            }
        }
    }
})

export { handler as GET, handler as POST };