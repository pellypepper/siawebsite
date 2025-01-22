
import './App.css';
import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import About from './pages/about';
import Career from './pages/career';
import New from './pages/New';

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
         <Route path="/new" element={<New />} />
    </Routes>
  </Router>
  );
}

export default App;
