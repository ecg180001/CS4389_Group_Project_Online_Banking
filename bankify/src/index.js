import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="index-body">
      <section class="main-section">
        <header class="nav-bar" className="main-header">
          <h3 class="logo">Bankify</h3>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
          </nav>
        </header>

        <div class="hero-section">
          <h1>Your Trusted Banking Partner</h1>
          <img src="/" alt="" srcset="" />
        </div>

        <div class="buttons">
          <a href="Login.html">
            <button>Login / Sign Up</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
