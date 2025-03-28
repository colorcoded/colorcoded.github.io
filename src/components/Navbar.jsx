import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faCalendar, faEnvelope, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";


const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") || "light" // Load stored theme or default to light
    );

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme); // Save user choice
    };

    // Initialize theme based on localStorage
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);
    
    const logoSrc = theme === "light" ? "/Navbar-Dark.svg" : "/Navbar-Dark.svg";

    const navbarRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
          setIsActive(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      };
    }, []);

    return (
    <nav ref={navbarRef} className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
    {/* ColorStack Logo */}
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
        <figure className="image">
              <img src={logoSrc} alt="Color Stack - Cal Poly Logo" />
          </figure>
        </Link>

        {/* Hamburger for Mobile */}
        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isActive}
          onClick={toggleNavbar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
        {/* Dropdown Menu */}
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`} id="navbar-menu">        
          <div className="navbar-start">
            <Link className="navbar-item team-item" to="/team">
              <FontAwesomeIcon icon={faUserGroup} className="mr-0" style={{ color: "#F7B70C" }} />Team
            </Link>
            <Link className="navbar-item events-item" to="/events">
              <FontAwesomeIcon icon={faCalendar} className="mr-0" style={{ color: "#F468A5" }} />
              Events
            </Link>
            {/* <Link className="navbar-item contact-item" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="mr-0" style={{ color: "#2691cb" }}/>
              Contact
            </Link> */}
        </div>

        <div className="navbar-end">
          {/* Social Media Icons */}
          <div className="navbar-item">
            <a
              href="https://www.instagram.com/colorcodedslo/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-item instagram-item"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#E1306C" }} />
            </a>
            <a
              href="https://discord.gg/WaCy9habtt"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-item discord-item"
              aria-label="Discord"
            >
              <FontAwesomeIcon icon={faDiscord} style={{ color: "#7289DA" }} />
            </a>
            {/* Theme Toggle */}
            <a
              onClick={toggleTheme}
              aria-label="Toggle Light/Dark Mode"
              className={`navbar-item ${theme === "light" ? "dark-mode-item" : "light-mode-item"}`}
            >
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                style={{
                  color: theme === "light" ? "#9867c5" : "#efbf04",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;