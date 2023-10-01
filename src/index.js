import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';


import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
