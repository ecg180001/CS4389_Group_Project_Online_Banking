"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useAuth } from "../auth/context";
import Link from "next/link";

export default function Home() {
  const { user } = useAuth();

  return (

    <div className="index-body">
    <section className="main-section">
      <header  className="main-header">
        <h3 className="logo">Bankify</h3>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
        </nav>
      </header>

      <div className="hero-section">
        <h1>Your Trusted Banking Partner</h1>
        <img src="/" alt="" srcset="" />
      </div>

      <div className="buttons">
        <a href="login"><button>Login / Sign Up</button></a>
      </div>
    </section>
  </div>

    // <div classNameName={styles.container}>
    //   <main classNameName={styles.main}>
    //     <h1 classNameName={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js 13!</a>
    //     </h1>

    //     <p classNameName={styles.description}>
    //       {!user && <Link href="/sign-in">Sign in</Link>}
    //       {user && `Logged in as ${user.email}`}
    //     </p>

    //     <div classNameName={styles.grid}>
    //       <a href="https://beta.nextjs.org/docs" classNameName={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js 13</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         classNameName={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Explore the Next.js 13 playground.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         classNameName={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>Deploy your Next.js site to a public URL with Vercel.</p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer classNameName={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{" "}
    //       <span classNameName={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  );
}
