import React, { useRef } from 'react';
import MainPage from '../pages/mainPage/MainPage';
import Projects from '../pages/projects/Projects';
import Header from '../pages/header/Header';

const Home = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header />
      <MainPage scrollToProjects={scrollToProjects} />
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
