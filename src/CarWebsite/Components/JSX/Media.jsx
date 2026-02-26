import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import '../CSS/Media.css';

export default function Media() {

  return (
    <section className="media">
      <div className="media-overlay">
        <div className="media-content">
          <h2>Connect With Us</h2>
          <p>Follow us for updates, deals, and automotive inspiration.</p>

          <div className="media-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}