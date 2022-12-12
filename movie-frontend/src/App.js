import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import NavbarComponent from './Components/NavbarComponent';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Movies from './pages/Movies';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Errorpage from './pages/Errorpage';

function App() {

  //Starter med at tilføje et class til body når siden loades
  useEffect(() => {
    document.body.classList.add('main-body');
  }, [])

  return (
    <>
      <NavbarComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;