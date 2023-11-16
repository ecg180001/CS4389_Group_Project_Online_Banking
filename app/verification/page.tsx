"use client";

// import "./page.css";
// import { useAuth } from ".../auth/context";
import "./login.scss";
import "./login.js";

export default function Home() {
  //   const { user } = useAuth();

  return (
    <body>
      <section className="auth-screen">
        <div className="auth-bg-img">
          <img src="Assets/main-background.jpg" alt="bg-img" />
        </div>
        <div className="logo-col"></div>
        <div className="login">
          <div className="title-auth">
            <h5>OTP Authentication</h5>
            <p>Enter the 6 digit OTP sent to your email.</p>
          </div>
          <form action="" className="otp-form">
            <input className="otp-field" type="text" name="opt-field[]" maxlength="1" />
            <input className="otp-field" type="text" name="opt-field[]" maxlength="1" />
            <input className="otp-field" type="text" name="opt-field[]" maxlength="1" />
            <input className="otp-field" type="text" name="opt-field[]" maxlength="1" />
            <input className="otp-field" type="text" name="opt-field[]" maxlength="1" />
            <input className="otp-field" type="text" name="opt-field[]" maxlength="1" />
          </form>

          <a href="dashboard_new.html">
            <button className="btn">Login</button>
          </a>
          <div className="auth-footer">
            <p>
              Didn’t receive an OTP.<a className="resend-btn">Resend</a>
            </p>
          </div>
        </div>
      </section>
    </body>
  );
}
