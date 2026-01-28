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
      // Google ile ilk login olunca email/role yaz
      if (account?.provider === "google" && profile?.email) {
        token.email = profile.email;

        // ✅ Admin kuralı: sadece bu mail admin olsun
        token.role = profile.email === "admin@nederlearn.nl" ? "admin" : "user";

        // İstersen domain bazlı:
        // token.role = profile.email.endsWith("@nederlearn.nl") ? "admin" : "user";
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
