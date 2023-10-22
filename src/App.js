import React from 'react';
import { Container } from 'reactstrap';
import Home from './components/Home.js/Home';

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
