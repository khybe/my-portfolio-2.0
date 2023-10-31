import React from "react"; // Import React for JSX rendering
import Fade from "react-reveal/Fade"; // Import the 'Fade' component from the 'react-reveal' library

import styles from "./ContactInfo.module.css"; // Import styles for ContactInfo component

const ContactInfo = () => {
  const { contactInfo, address, location, email, phone } = styles; // Destructure CSS classes from the imported styles

  return (
    <div className={contactInfo}>
      {/* Render a div with the 'contactInfo' class */}
      <Fade left>
        {/* Apply a 'Fade' animation with a left transition */}
        <h2>CONTACT</h2> {/* Render the 'CONTACT' heading */}
        <address className={address}>
          {/* Render an address block with the 'address' class */}
          <p className={location}>Prague, Czech Republic</p>
          {/* Display location details with the 'location' class */}
          <a className={email} href="mailto:saadat.khaibar@gmail.com">
            {/* Display an email link */}
            saadat.khaibar@gmail.com {/* Email content */}
          </a>
          <p className={phone}>+420 776 200 619</p>
          {/* Display phone number with the 'phone' class */}
        </address>
      </Fade>
    </div>
  );
};

export default ContactInfo; // Export the ContactInfo component
