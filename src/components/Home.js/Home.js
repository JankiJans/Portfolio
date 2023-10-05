import React, { useRef } from 'react';
import MainPage from '../pages/mainPage/MainPage';
import Projects from '../pages/projects/Projects';
import Header from '../pages/header/Header';
import Contact from '../pages/contact/Contact';
import SkillPage from '../pages/skillsPage/SkillPage';
import { useState, useEffect } from 'react';

import styles from './Home.module.scss'

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillPageRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (!contactRef.current) {
        return;
      }
      
      const rect = contactRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
  
    window.addEventListener('scroll', checkScroll);
  
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSkillPage = () => {
    if (skillPageRef.current) {
      skillPageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header />
      <MainPage scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} scrollToSkillPage={scrollToSkillPage}/>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillPageRef}>
        <SkillPage/>
      </div>
      <div ref={contactRef}>
        <Contact />
        {showScrollButton && <button onClick={scrollToTop} className={`${styles.scrollButton} ${styles.bounce}`}><i className="fa fa-arrow-up"></i></button>}
      </div>
    </div>
  );
};

export default Home;
