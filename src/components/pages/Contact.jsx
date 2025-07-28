import React from "react";
import "../styles/contact.css";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p className="intro-text">
        Have an idea or question? Just drop your email below and we'll get back
        to you. Your message will be automatically forwarded to our Discord
        server.
      </p>

      <div className="contact-container">
        <div className="social-media-links">
          <h3>Connect With Us</h3>
          <ul>
            <li>
              <a
                href="https://discord.gg/gykk4TEzpz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} /> Join our Discord
              </a>
            </li>
            <li>
              <a href="mailto:support@enemystudios.com">
                <FontAwesomeIcon icon={faEnvelope} /> support@enemystudios.com
              </a>
            </li>
            <li>
              <a
                href="https://x.com/do_Enemy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} /> Twitter/X
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <a href="mailto:support@enemystudios.com" className="mailto-button">
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
