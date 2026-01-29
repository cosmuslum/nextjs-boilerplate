"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.logo}>🇳🇱 NederLearn</Link>

      <div style={styles.right}>
        <Link href="/dersler">Dersler</Link>

        {status === "authenticated" ? (
          <>
            {session.user.role === "admin" && (
              <Link href="/admin">Admin</Link>
            )}
            <button onClick={() => signOut()}>Çıkış</button>
          </>
        ) : (
          <button onClick={() => signIn("google")}>Giriş</button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 24px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)",
  },
  logo: {
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
  },
  right: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
};
