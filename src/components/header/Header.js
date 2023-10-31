import React, { useState, useEffect } from "react";

import NavLinks from "./components/NavLinks"; // Import NavLinks component
import Backdrop from "../../UI/Backdrop"; // Import Backdrop component
import logoImage from "../../assets/logo.gif"; // Import logo image

import styles from "./Header.module.css"; // Import CSS styles

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile navigation menu
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769); // State to check for mobile view

  const HandleNavbarToggle = () => {
    // Function to toggle the mobile navigation menu
    if (isMobile) {
      setIsOpen((prevState) => !prevState);
    }
  };

  useEffect(() => {
    // Monitor window width changes to determine screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769); // Update isMobile state
    };

    window.addEventListener("resize", handleResize); // Listen for window resize events

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { navbar, logo, menuButton, bar, open } = styles; // Destructure CSS styles

  return (
    <header>
      <nav className={navbar}>
        {isMobile && isOpen && <Backdrop onClick={HandleNavbarToggle} />}{" "}
        {/* Conditional rendering for the Backdrop component */}
        <div className={logo}>
          <a href="#hero">
            {" "}
            {/* Logo image linking to the hero section */}
            <img src={logoImage} alt="Khaibar Portfolio Logo" />{" "}
            {/* Display logo image */}
          </a>
        </div>
        <button
          className={`${menuButton} ${isOpen ? open : ""}`} // Conditionally apply classes for the menu button
          onClick={HandleNavbarToggle} // Toggle mobile navigation menu on button click
        >
          <div className={bar}></div> {/* The button bar icon */}
          <div className={bar}></div> {/* The button bar icon */}
          <div className={bar}></div> {/* The button bar icon */}
        </button>
        <NavLinks isOpen={isOpen} onToggleMenu={HandleNavbarToggle} />{" "}
        {/* Navigation links */}
      </nav>
    </header>
  );
}

export default Header; // Export the Header component
