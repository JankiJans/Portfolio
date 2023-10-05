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
            <h5>Cześć!</h5>
            <p>Mam na imię <span>Janek</span> i właśnie zaczynam moją przygodę z programowaniem! Po niedawnym ukończeniu kursu, mam głowę pełną pomysłów i jestem gotów na nowe wyzwania. W tym portfolio znajdziesz kilka moich pierwszych projektów. To dopiero początek, ale już teraz cieszę się na myśl o wszystkich niesamowitych rzeczach, które przed nami.</p>
          </div>
          <div className={styles.box}>
            <div>
              <Link to="/" className={styles.links} onClick={scrollToContact}>
                CONTACT
              </Link>
            </div>
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
          </div>
        </div>
        <div className={styles.arrow} onClick={scrollToProjects}>
          <i className="fa fa-arrow-down"></i>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
