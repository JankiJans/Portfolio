import React from 'react';
import MainPage from './components/pages/mainPage/MainPage';
import { Container } from 'reactstrap';
import Header from './components/pages/header/Header';
import Home from './components/Home.js/Home';
import Projects from './components/pages/projects/Projects';

const App = () => {
  return (
    <div>
      <Container fluid>
        <div>
          <Home />
        </div>
      </Container>
    </div>
  );
};

export default App;
