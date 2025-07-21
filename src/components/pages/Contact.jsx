import React from "react";
import "../styles/contact.css";

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
        <div className="contact-form">
          <a href="mailto:support@enemystudios.com" className="mailto-button">
            Send Email
          </a>
        </div>

        <div className="social-media-links">
          <h3>Connect With Us</h3>
          <ul>
            <li>
              <a
                href="https://discord.gg/yourlink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our Discord
              </a>
            </li>
            <li>
              <a href="mailto:support@enemystudios.com">
                Email: support@enemystudios.com
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
            <li>
              <a
                href="https://instagram.com/yourinstagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
