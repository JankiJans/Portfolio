import React from 'react';
import MainPage from './components/pages/mainPage/MainPage';
import { Container } from 'reactstrap';
import Header from './components/pages/header/Header';

const App = () => {
  return (
    <div>
      <Container fluid>
        <Header/>
        <div>
          <MainPage />
        </div>
      </Container>
    </div>
  );
};

export default App;
