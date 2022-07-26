import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './sass/App.css';
import './sass/Footer.css';
import './sass/Project.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


