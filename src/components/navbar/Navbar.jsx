import React, { useState, useEffect } from "react";
import color from "../../config/colors";
import logo from "../../assets/logos/logo.jpeg";
import "./navbar.css";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const handleDropdownClick = (dropdownId) => {
    setDropdownOpen(dropdownOpen === dropdownId ? null : dropdownId);
  };

  const renderDropdown = (title, items, id) => (
    <li className={`nav-item dropdown ${dropdownOpen === id ? "show" : ""}`}>
      <a
        className="nav-link dropdown-toggle hide-nav"
        href="#"
        id={`navbarDropdown-${id}`}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => handleDropdownClick(id)}
      >
        {title}
      </a>
      <ul
        className={`dropdown-menu ${dropdownOpen === id ? "show" : ""}`}
        aria-labelledby={`navbarDropdown-${id}`}
      >
        {items.map(({ to, label }) => (
          <li key={to}>
            <a
              className="dropdown-item hide-nav"
              href={to}
              onClick={handleLinkClick}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white black-shadow px-4 ${
        isFixed ? "fixed-top" : ""
      }`}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand hide-nav" onClick={handleLinkClick}>
          <img src={logo} alt="brand-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars fs-4"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className="nav-link hide-nav"
                aria-current="page"
                href="/"
                onClick={handleLinkClick}
              >
                Home
              </a>
            </li>
            {renderDropdown(
              "About Us",
              [
                { to: "/who-we-are", label: "Who we are" },
                { to: "/what-we-do", label: "What we do" },
              ],
              "about-us"
            )}
            <li className="nav-item">
              <a
                className="nav-link hide-nav"
                href="/our-products"
                onClick={handleLinkClick}
              >
                Our Products
              </a>
            </li>
            {renderDropdown(
              "Team",
              [
                { to: "/board-of-directors", label: "Board of Directors" },
                { to: "/management-team", label: "Management Team" },
                { to: "/other-team-members", label: "Other Team Members" },
              ],
              "team"
            )}
            <li className="nav-item">
              <a
                className="nav-link hide-nav"
                href="/#contact"
                onClick={handleLinkClick}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <a
              style={styles.button}
              className="btn text-white hide-nav"
              href="/report-a-claim"
              onClick={handleLinkClick}
            >
              Report a Claim
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  button: {
    backgroundColor: color.red,
    marginTop: 2,
  },
};

export default Navbar;
