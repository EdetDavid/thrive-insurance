import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
      <NavLink
        className="nav-link dropdown-toggle hide-nav"
        to="#"
        id={`navbarDropdown-${id}`}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => handleDropdownClick(id)}
      >
        {title}
      </NavLink>
      <ul
        className={`dropdown-menu ${dropdownOpen === id ? "show" : ""}`}
        aria-labelledby={`navbarDropdown-${id}`}
      >
        {items.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              className="dropdown-item hide-nav"
              to={to}
              onClick={handleLinkClick}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white black-shadow px-4 ${
          isFixed ? "fixed-top" : ""
        }`}
      >
        <div className="container-fluid">
          <NavLink
            to="/"
            className="navbar-brand hide-nav"
            onClick={handleLinkClick}
          >
            <img src={logo} alt="brand-logo" />
          </NavLink>
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
                <NavLink
                  className="nav-link hide-nav"
                  aria-current="page"
                  to="/"
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>
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
                <NavLink
                  className="nav-link hide-nav"
                  to="/our-products"
                  onClick={handleLinkClick}
                >
                  Our Products
                </NavLink>
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
              <NavLink
                style={styles.button}
                className="btn text-white hide-nav"
                to="/report-a-claim"
                onClick={handleLinkClick}
              >
                Report a Claim
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
      {/* Desk lines section under navbar */}
      <div className="desk-lines-bar">
        <span>
          <i
            className="fas fa-phone-alt me-2"
            style={{ color: "#25d366", fontSize: "1.1em" }}
          ></i>
          <span>
            Desk 1: {" "}
            <a
              href="tel:+2348180996418"
              style={{
                color: "#fff",
                textDecoration: "underline dotted",
                fontWeight: 600,
              }}
            >
              +234 818 099 6418
            </a>
          </span>
        </span>
        <span>
          <i
            className="fas fa-phone-alt me-2"
            style={{ color: "#25d366", fontSize: "1.1em" }}
          ></i>
          <span>
            Desk 2: {" "}
            <a
              href="tel:+2347087942708"
              style={{
                color: "#fff",
                textDecoration: "underline dotted",
                fontWeight: 600,
              }}
            >
              +234 708 794 2708
            </a>
          </span>
        </span>
      </div>
    </>
  );
};

const styles = {
  button: {
    backgroundColor: color.red,
    marginTop: 2,
  },
};

export default Navbar;
