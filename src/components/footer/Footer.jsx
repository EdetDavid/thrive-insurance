import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import "./Footer.css"; // Ensure this is imported

const Footer = ({ className }) => {
  return (
    <footer data-aos="fade-in" className={`footer p-4 ${className}`}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>About Thrive</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Follow Us</h5>
            <ul className="list-unstyled social-icons">
              <li>
                <a className="nav-link" href="https://ng.linkedin.com/company/combined-all-risks-insurance-brokers-carib-nigeria-limited">
                  <FaLinkedin /> <span className="icon-text">Linkedin</span>
                </a>
              </li>
              <li>
                <a className="nav-link" href="https://www.instagram.com/thriveinsurancebrokers/">
                  <FaInstagram /> <span className="icon-text">Instagram</span>
                </a>
              </li>
              <li>
                <a className="nav-link" href="https://www.facebook.com/thriveinsurancebrokers/">
                  <FaFacebook /> <span className="icon-text">Facebook</span>
                </a>
              </li>
              <li>
                <a className="nav-link" href="https://www.twitter.com">
                  <FaTwitter /> <span className="icon-text">Twitter</span>
                </a>
              </li><li>
                <a className="nav-link" href="https://www.tiktok.com/@thriveinsurancebrokers/video/7283816632215014661">
                  <FaTiktok /> <span className="icon-text">Tiktok</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <p className="copywright">
              &copy; {new Date().getFullYear()} Thrive Insurance Brokers Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
