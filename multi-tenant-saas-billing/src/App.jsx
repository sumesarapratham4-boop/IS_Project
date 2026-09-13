import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardPreview from "./components/DashboardPreview";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="app">

      <Navbar onLogin={() => setIsLoginOpen(true)} />

      <main>
        <Hero onLogin={() => setIsLoginOpen(true)} />

        <DashboardPreview />

        <Features />

        <HowItWorks />

        <Pricing />

        <FAQ />

        <CTA />
      </main>

      <Footer />

      {isLoginOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsLoginOpen(false)}
        >
          <div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setIsLoginOpen(false)}
            >
              ×
            </button>

            <div className="modal-logo">
              <div className="logo-icon">S</div>
              <span>SaaSTrack</span>
            </div>

            <h2>Welcome back</h2>

            <p className="modal-subtitle">
              Sign in to manage your SaaS usage and billing.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Login will be connected to your backend later.");
              }}
            >
              <label>Email</label>

              <input
                type="email"
                placeholder="you@company.com"
                required
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="••••••••"
                required
              />

              <div className="login-options">
                <label className="remember">
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#forgot">Forgot password?</a>
              </div>

              <button className="login-submit">
                Sign in
              </button>
            </form>

            <p className="signup-text">
              Don't have an account?
              <a href="#signup"> Create one</a>
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;