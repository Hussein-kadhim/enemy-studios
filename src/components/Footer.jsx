import React from "react";
import "../components/styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand-info">
          {" "}
          {/* First section (Left) */}
          <h3>Enemy Studios</h3>
          <p className="tagline">Powered by Passion & Code</p>
          <p className="description">Game Acquisition & Services</p>
        </div>

        <div className="footer-section quick-links footer-middle-section">
          {" "}
          {/* Second section (Middle) */}
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#experiences">Our Games</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Combine Legal and Social or choose one for the third section */}
        <div className="footer-section legal-social-info">
          {" "}
          {/* Third section (Right) */}
          <h4>Legal & Connect</h4>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a
                href="https://discord.gg/yourdiscordlink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourtwitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter/X
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>© {new Date().getFullYear()} Enemy Studios. All rights reserved.</p>
        <p>Website created by Hussein Kadhim</p>
      </div>
    </footer>
  );
}

export default Footer;
