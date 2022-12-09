import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import NavbarComponent from './Components/navbarComponent';
import {useEffect} from 'react';
import React from 'react';

function App() {

  useEffect(() => {
    document.body.classList.add('main-body');
  });

  return (
      <NavbarComponent/>
  );
}

export default App;