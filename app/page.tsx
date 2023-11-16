"use client";

import "./page.css";
import { useAuth } from "../auth/context";

export default function Home() {
  const { user } = useAuth();

  return (
    <body className="index-body">
      <section className="main-section">
        <header className="nav-bar main-header">
          <h3 className="logo">Bankify</h3>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
          </nav>
        </header>

        <div className="hero-section">
          <h1>Your Trusted Banking Partner</h1>
        </div>

        <div className="buttons">
          <a href="./login/page.tsx">
            <button>Login / Sign Up</button>
          </a>
        </div>
      </section>
    </body>
  );
}
