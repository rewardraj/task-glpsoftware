import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/globalStyles';
import Html from './pages/Html';
import Button from './pages/Button';
import Header from './pages/Header';
import Mockup from './pages/Mockup';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/button" element={<Button />} />
        <Route path="/header" element={<Header />} />
        <Route path="/mockup" element={<Mockup />} />
        
      </Routes>
    </Router>
  );
}

export default App;
