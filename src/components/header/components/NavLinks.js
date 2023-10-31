import React, { useState, useEffect } from "react";
import styles from "./NavLinks.module.css";

const NavLinks = ({ isOpen, onToggleMenu }) => {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState("#hero");

  // Destructuring styles
  const { navLinks, open, active } = styles;

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
    onToggleMenu();
  };

  // Intersection Observer callback for when a section is in view
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      // Check if section is fully visible and its top is in view
      if (
        entry.isIntersecting &&
        entry.intersectionRatio >= 1 &&
        entry.boundingClientRect.top >= 0
      ) {
        setActiveLink(`#${entry.target.id}`);
      }
    });
  };

  useEffect(() => {
    // Create Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-50px 0px -50px 0px", // Apply a margin to root to trigger intersection
    });

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect(); // Disconnect observer on component unmount
    };
  }, []);

  // Function to handle scroll
  const handleScroll = () => {
    // Calculate the offset tops of each section
    const sectionTops = Array.from(document.querySelectorAll("section")).map(
      (section) => ({
        id: `#${section.id}`,
        offset: section.offsetTop,
        height: section.getBoundingClientRect().height,
      })
    );

    const currentScroll = window.scrollY + 200;

    // Determine the active section based on the scroll position
    for (let i = sectionTops.length - 1; i >= 0; i--) {
      if (
        currentScroll >= sectionTops[i].offset &&
        currentScroll < sectionTops[i].offset + sectionTops[i].height
      ) {
        setActiveLink(sectionTops[i].id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Listen for scroll events
    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove scroll event listener on unmount
    };
  }, []);

  // Render the navigation links
  return (
    <ul className={`${navLinks} ${isOpen ? open : ""}`}>
      <li
        className={activeLink === "#hero" ? active : ""}
        onClick={() => handleLinkClick("#hero")}
      >
        <a href="#hero">Home</a>
      </li>
      <li
        className={activeLink === "#about" ? active : ""}
        onClick={() => handleLinkClick("#about")}
      >
        <a href="#about">About</a>
      </li>
      <li
        className={activeLink === "#projects" ? active : ""}
        onClick={() => handleLinkClick("#projects")}
      >
        <a href="#projects">Projects</a>
      </li>
      <li
        className={activeLink === "#contact" ? active : ""}
        onClick={() => handleLinkClick("#contact")}
      >
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
