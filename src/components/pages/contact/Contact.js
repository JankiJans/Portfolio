import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  function ContactInfo({ label, info }) {
    return (
      <p>
        <strong>{label}:</strong> {info}
      </p>
    );
  }

  function DownloadButton() {
    return (
      <div className={styles.downloadCv}>
        <button className={styles.btn} onClick={downloadCV}>Download CV</button>
      </div>
    );
  }
  const downloadCV = () => {
    alert('CV downloaded');
  };

  return (
    <div className={styles.contactPage}>
      <h1>Contact Me</h1>

      <div className={styles.contactInfo}>
        <ContactInfo label="Phone Number" info="+XX-XXX-XXXX" />
        <ContactInfo label="Private Email" info="myprivateemail@example.com" />
        <ContactInfo label="Work Email" info="myworkemail@work.com" />
      </div>

      <DownloadButton />
    </div>
  );
};

export default Contact;
