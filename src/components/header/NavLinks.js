import styles from "./NavLinks.module.css";

const NavLinks = ({ isOpen, onClick }) => {
  const { navLinks, open } = styles;

  return (
    <ul className={`${navLinks} ${isOpen ? open : ""}`}>
      <li onClick={onClick}>
        <a href="#hero">Home</a>
      </li>
      <li onClick={onClick}>
        <a href="#about">About</a>
      </li>
      <li onClick={onClick}>
        <a href="#projects">Projects</a>
      </li>
      <li onClick={onClick}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
