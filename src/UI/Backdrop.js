import ReactDOM from "react-dom"; // Import ReactDOM for portal creation

import styles from "./Backdrop.module.css"; // Import styles from the Backdrop module

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={props.onClick}></div>, // Create a div with backdrop styling and onClick event
    document.getElementById("backdrop-hook") // Render the div through a portal to the backdrop-hook element
  );
};

export default Backdrop; // Export the Backdrop component as the default export
