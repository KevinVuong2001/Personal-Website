import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import MySkills from './Pages/MySkills';
import MyPortfolio from './Pages/MyPortfolio';
import ContactMe from './Pages/ContactMe';
import NavigationBar from './Pages/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<MySkills />} />
          <Route path="/portfolio" element={<MyPortfolio />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
