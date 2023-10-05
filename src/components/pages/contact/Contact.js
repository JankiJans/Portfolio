import React from 'react';
import styles from './Contact.module.scss';
import cv from '../../../../src/downloads/Resum_JanKedzierski_ENG.pdf';

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
        <button className={styles.btn} onClick={downloadCV}>
          Download CV
        </button>
      </div>
    );
  }
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Resum_JanKedzierski_ENG.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.contactPage}>
      <h1>Contact Me</h1>

      <div className={styles.contactInfo}>
        <ContactInfo label="Phone Number" info="+48 605 601 699" />
        <ContactInfo label="Private Email" info="jkedzierski087@gmail.com" />
        <ContactInfo label="Work Email" info="jan.kedzierski@junior-dev.pl" />
      </div>

      <DownloadButton />
    </div>
  );
};

export default Contact;
