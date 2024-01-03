import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Auth0Provider.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});