import "./Navbar.css";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/navbar";
import useTheme from "@/hooks/useTheme";
import useActiveSection from "@/hooks/useActiveSection";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const activeSection = useActiveSection();

  const toggleMenu = () =>
  setMenuOpen((prev) => !prev);

  const closeMenu = () =>
  setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header>
      <nav className="navbar">
        <a href="#hero" className="nav-logo" aria-label="Ir al inicio">
          T<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`} id="mobile-navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                activeSection === link.href.slice(1)
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className={`nav-overlay ${menuOpen ? "open" : ""}`} onClick={closeMenu} />

        <div className="nav-actions">
          <button
            className="theme-toggle"
            aria-label="Cambiar tema"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <svg className="theme-icon-dark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" > <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /> </svg>) : (<svg className="theme-icon-light" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" > <circle cx="12" cy="12" r="5" /> <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /> </svg>)}
          </button>

          <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label={ menuOpen ? "Cerrar menú" : "Abrir menú" } aria-expanded={menuOpen} aria-controls="mobile-navigation">
            <span />
            <span />
            <span />
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;