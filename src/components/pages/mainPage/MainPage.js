import React from 'react';
import { Container } from 'reactstrap';
import styles from './MainPage.module.scss';
import { Link } from 'react-router-dom';

const MainPage = ({ scrollToProjects, scrollToContact, scrollToSkillPage }) => {
  return (
    <div className={styles.centeredContent}>
      <Container>
        <div className={styles.boxContainer}>
          <div className={`${styles.textBox} ${styles.aboutMe} ${styles.slideInAnimation}`}>
            <h5>Hey!</h5>
            <p>
              My name is <span>Janek</span> and I am just starting my adventure with programming! After recently completing a course, I have a head full of ideas and am ready for new challenges. In this portfolio, you will find some of my first <span>projects</span>. This is just the beginning, but I am already excited about all the amazing things that lie ahead of me.
            </p>
          </div>
          <div className={styles.box}>
            <div>
              <Link to="/" className={styles.links} onClick={scrollToProjects}>
                PROJECTS
              </Link>
            </div>
            <div>
              <Link to="/" className={styles.links} onClick={scrollToSkillPage}>
                SKILLS
              </Link>
            </div>
            <div>
              <Link to="/" className={styles.links} onClick={scrollToContact}>
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
