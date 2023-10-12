import React, { useState, useEffect } from "react";

import Backdrop from "../../UI/Backdrop";
import logoImage from "../../assets/logo.gif";

import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  const toggleNavbarHandler = () => {
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

  const { navbar, logo, menuButton, bar, navLinks, open } = styles;

  return (
    <header>
      <nav className={navbar}>
        {isMobile && isOpen && <Backdrop onClick={toggleNavbarHandler} />}
        <div className={logo}>
          <a href="#hero">
            <img src={logoImage} alt="Khaibar Portfolio Logo" />
          </a>
        </div>
        <button
          className={`${menuButton} ${isOpen ? open : ""}`}
          onClick={toggleNavbarHandler}
        >
          <div className={bar}></div>
          <div className={bar}></div>
          <div className={bar}></div>
        </button>
        <ul className={`${navLinks} ${isOpen ? open : ""}`}>
          <li onClick={toggleNavbarHandler}>
            <a href="#hero">Home</a>
          </li>
          <li onClick={toggleNavbarHandler}>
            <a href="#about">About</a>
          </li>
          <li onClick={toggleNavbarHandler}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={toggleNavbarHandler}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
