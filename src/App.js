// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Catering from './components/Catering';
import PrivateChef from './components/PrivateChef';
import PizzaToEvents from './components/PizzaToEvents';
import PizzaInTheOven from './components/PizzaInTheOven';
import ContactForm from './components/ContactForm'; // Import the ContactForm

import './App.css';
import WhatsAppIcon from './components/WhatsAppIcon';
import AccessibilityButton from './components/AccessibilityButton';

function App() {
  return (
    <Router basename="/">
      <div className="App">
      <AccessibilityButton/>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/PrivateChef" element={<PrivateChef />} />
            <Route path="/PizzaToEvents" element={<PizzaToEvents />} />
            <Route path="/PizzaInTheOven" element={<PizzaInTheOven />} />
            
          </Routes>
         
        </div>
         <WhatsAppIcon/>
         
        <Footer />
      </div>
    </Router>
  );
}

export default App;
