import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Profile from './components/pages/Profile';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Profile />
      </div>
    </Router>
  );
}

export default App;
