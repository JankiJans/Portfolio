import React, { useRef } from 'react';
import MainPage from '../pages/mainPage/MainPage';
import Projects from '../pages/projects/Projects';
import Header from '../pages/header/Header';
import Contact from '../pages/contact/Contact';
import SkillPage from '../pages/skillsPage/SkillPage';

const Home = () => {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillPageRef = useRef(null);

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
      </div>
    </div>
  );
};

export default Home;
