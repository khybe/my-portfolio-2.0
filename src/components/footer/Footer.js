import React from "react";
import SocialLinks from "../../UI/SocialLinks";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-element">
        <a href="mailto:saadat.khaibar@gmail.com">saadat.khaibar@gmail.com</a>
      </div>
      <div className="footer-element">
        <a href="tel:+420 776 200 619">+420 776 200 619</a>
      </div>
      <div className="footer-element">
        <p>Prague, Czech Republic</p>
      </div>
      <div className="footer-element">
        <div className="social-links">
          <SocialLinks />
        </div>
      </div>
      <div className="footer-element copyright">
        &copy; 2023{" "}
        <a
          href="https://khaibarsaadat.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Khaibar Saadat
        </a>
        | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
