"use client";

// import "./page.css";
// import { useAuth } from ".../auth/context";
import React, { useState } from "react";
import "./login.css";

export default function Home() {
  //   const { user } = useAuth();

  // const get = (elem) => document.getElementById(elem),
  //   registerButton = get("register"),
  //   loginButton = get("login"),
  //   container = get("container");

  // registerButton.onclick = () => {
  //   container.classNameName = "active";
  // };

  // loginButton.onclick = () => {
  //   container.classNameName = "close";
  // };

  // const [isActive, setActive] = useState(true);
  // const handleToggle = () => {
  //   setActive(!isActive);
  // }

  //onClick={handleToggle}

  return (
    <section className="forms-section">
      <h1 className="section-title">Hello. Create an Account or log in</h1>
      <div className="forms">
        <div className="form-wrapper is-active">
          <button type="button" className="switcher switcher-login">
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login">
            <fieldset>
              <legend>Please, enter your email and password htmlFor login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" type="email" />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" />
              </div>
            </fieldset>
            <a href="./verification/">
              <button type="submit" className="btn-login">
                Login
              </button>
            </a>
          </form>
        </div>
        <div className="form-wrapper">
          <button type="button" className="switcher switcher-signup">
            Sign Up
            <span className="underline"></span>
          </button>
          <form className="form form-signup">
            <fieldset>
              <legend>Please, enter your email, password and password confirmation htmlFor sign up.</legend>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input id="signup-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password-confirm">Confirm password</label>
                <input id="signup-password-confirm" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
