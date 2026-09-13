import { useState } from "react";

function Navbar({ onLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      <div className="nav-container">

        <a href="#" className="brand" onClick={closeMenu}>

          <div className="brand-icon">
            S
          </div>

          <span>SaaSTrack</span>

        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#features" onClick={closeMenu}>
            Features
          </a>

          <a href="#how-it-works" onClick={closeMenu}>
            How it works
          </a>

          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <div className="mobile-nav-buttons">

            <button
              className="mobile-login"
              onClick={() => {
                closeMenu();
                onLogin();
              }}
            >
              Log in
            </button>

            <a href="#pricing" className="mobile-start">
              Get started
            </a>

          </div>

        </nav>

        <div className="nav-actions">

          <button
            className="login-button"
            onClick={onLogin}
          >
            Log in
          </button>

          <a href="#pricing" className="nav-cta">
            Get started
          </a>

        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  );
}

export default Navbar;