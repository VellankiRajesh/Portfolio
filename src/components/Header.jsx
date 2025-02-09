import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // Default to dark theme
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Apply theme on mount and when changed
    document.documentElement.setAttribute("data-theme", isDarkTheme ? "dark" : "light");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <a href="#home" className="logo" onClick={() => scrollToSection("home")}>
          Vellanki Rajesh
        </a>

        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
          >
            <FontAwesomeIcon 
              icon={isDarkTheme ? faSun : faMoon} 
              className={`theme-icon ${isDarkTheme ? "rotate" : ""}`}
            />
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger"></span>
          </button>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <a
                href="#home"
                className="nav-link"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-link"
                onClick={() => scrollToSection("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="nav-link"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
