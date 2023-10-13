import React, { useState, useEffect } from "react";

import NavLinks from "./NavLinks";
import Backdrop from "../../UI/Backdrop";
import logoImage from "../../assets/logo.gif";

import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  const HandleNavbarToggle = () => {
    if (isMobile) {
      setIsOpen((prevState) => !prevState);
    }
  };

  useEffect(() => {
    // Add an event listener to detect window width changes and update isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { navbar, logo, menuButton, bar, open } = styles;

  return (
    <header>
      <nav className={navbar}>
        {isMobile && isOpen && <Backdrop onClick={HandleNavbarToggle} />}
        <div className={logo}>
          <a href="#hero">
            <img src={logoImage} alt="Khaibar Portfolio Logo" />
          </a>
        </div>
        <button
          className={`${menuButton} ${isOpen ? open : ""}`}
          onClick={HandleNavbarToggle}
        >
          <div className={bar}></div>
          <div className={bar}></div>
          <div className={bar}></div>
        </button>
        <NavLinks isOpen={isOpen} onClick={HandleNavbarToggle} />
      </nav>
    </header>
  );
}

export default Header;
