import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  const { contactInfo, address, location, email, phone } = styles;

  return (
    <div className={contactInfo}>
      <h2>CONTACT</h2>
      <address className={address}>
        <p className={location}>Prague, Czech Republic</p>
        <a className={email} href="mailto:saadat.khaibar@gmail.com">
          saadat.khaibar@gmail.com
        </a>
        <p className={phone}>+420 776 200 619</p>
      </address>
    </div>
  );
};

export default ContactInfo;