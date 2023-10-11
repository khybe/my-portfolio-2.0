import React, { useState } from "react";

import logoImage from "../../assets/logo.gif";

import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbarHandler = () => {
    setIsOpen(!isOpen);
  };

  const { navbar, logo, menuButton, bar, navLinks, open } = styles;

  return (
    <header>
      <nav className={navbar}>
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
