"use client";

// import "./page.css";
// import { useAuth } from ".../auth/context";
import "./login.scss";

export default function Home() {
  //   const { user } = useAuth();

  // const get = (elem) => document.getElementById(elem),
  //   registerButton = get("register"),
  //   loginButton = get("login"),
  //   container = get("container");

  // registerButton.onclick = () => {
  //   container.className = "active";
  // };

  // loginButton.onclick = () => {
  //   container.className = "close";
  // };

  return (
    <body>
      <div id="container">
        <div className="login">
          <div className="content">
            <h1>Log In</h1>
            <form>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <div>
                <label className="remember">
                  {" "}
                  <input type="checkbox" id="remember" checked />
                  <span>Remember me</span>{" "}
                </label>
                <span className="forget">
                  <a href="#">Forgot password?</a>
                </span>
                <span className="clearfix"></span>
              </div>
              <a href="../verification/">
                <button>Log In</button>
              </a>
            </form>
            <span className="copy">(C) 2023</span>
          </div>
        </div>
        <div className="page front">
          <div className="content">
            <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
            <h1>Hello, friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button id="register" onClick={useS(container)?.classList.replace("close", "active")}>
              Register
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 16 16 12 12 8" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="page back">
          <div className="content">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button id="login">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 8 8 12 12 16" />
                <line x1="16" y1="12" x2="8" y2="12" />
              </svg>
              Log In
            </button>
          </div>
        </div>
        <div className="register">
          <div className="content">
            <h1>Sign Up</h1>

            <form>
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <input type="number" placeholder="Account Number" />
              <label className="remember">
                {" "}
                <input type="checkbox" id="terms" />
                <span>I accept terms</span>{" "}
              </label>
              <span className="clearfix"></span>
              <a href="./verification">
                <button>Submit</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
