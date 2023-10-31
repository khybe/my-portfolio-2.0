import React from "react";
import SocialLinks from "../../UI/SocialLinks"; // Import SocialLinks component
import "./Footer.css"; // Import Footer-specific styles

// Footer component responsible for displaying footer information
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      {" "}
      {/* The footer element */}
      <div className="footer-element">
        {" "}
        {/* First footer element */}
        <a href="mailto:saadat.khaibar@gmail.com">
          saadat.khaibar@gmail.com
        </a>{" "}
        {/* Email address */}
      </div>
      <div className="footer-element">
        {" "}
        {/* Second footer element */}
        <a href="tel:+420 776 200 619">+420 776 200 619</a>{" "}
        {/* Contact number */}
      </div>
      <div className="footer-element">
        {" "}
        {/* Third footer element */}
        <p>Prague, Czech Republic</p> {/* Location details */}
      </div>
      <div className="footer-element">
        {" "}
        {/* Fourth footer element */}
        <div className="social-links">
          {" "}
          {/* SocialLinks component for social media */}
          <SocialLinks /> {/* Renders the SocialLinks component */}
        </div>
      </div>
      <div className="footer-element copyright">
        {" "}
        {/* Footer element for copyright */}
        &copy; 2023 {/* Copyright symbol and year */}
        <a
          href="https://khaibarsaadat.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Khaibar Saadat {/* Author's name with a link to personal website */}
        </a>
        | All Rights Reserved {/* All rights reserved statement */}
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component
