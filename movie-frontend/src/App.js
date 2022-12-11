import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import NavbarComponent from './Components/NavbarComponent';
import { useEffect } from 'react';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Movies from './pages/Movies';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {

  //Starter med at tilføje et class til body når siden loades
  useEffect(() => {
    document.body.classList.add('main-body');
  });

  return (
    <>
      <NavbarComponent />
      <div>
        <Routes>
          <Route path= '/' element={<Home/>} />
          <Route path= '/movies' element={<Movies/>} />
          <Route path= '/actors' element={<Actors/>} />
          <Route path= '/login' element={<LogIn/>} />
          <Route path= '/signup' element={<SignUp/>} />
        </Routes>
      </div>

    </>
  );
}

export default App;