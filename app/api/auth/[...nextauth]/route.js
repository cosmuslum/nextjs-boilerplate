import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === "google" && profile?.email) {
        token.email = profile.email;

        // ✅ Admin mailini buradan ayarlıyorsun:
        token.role = profile.email === "mcosmuslu@gmail.com" ? "admin" : "user";
      }
      return token;
    },

    async session({ session, token }) {
      session.user.email = token.email;
      session.user.role = token.role || "user";
      return session;
    },
  },

  pages: {
    signIn: "/giris",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
