import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

interface AuthObj {
  clientId: string
  clientSecret: string
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
})
