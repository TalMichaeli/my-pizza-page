import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Catering from './components/Catering';
import PrivateChef from './components/PrivateChef';
import PizzaToEvents from './components/PizzaToEvents';
import PizzaInTheOven from './components/PizzaInTheOven';
import AccessibilityButton from './components/AccessibilityButton';
import WhatsAppIcon from './components/WhatsAppIcon';
import ContactUs from './components/ContactUs';
import Info from './components/Info';
import PhotoAlbum from './components/PhotoAlbum';
import ScrollToTop from './components/ScrollToTop';
import PriceCalculator from './components/PriceCalculator';
import './App.css';

function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/PrivateChef" element={<PrivateChef />} />
            <Route path="/PizzaToEvents" element={<PizzaToEvents />} />
            <Route path="/PizzaInTheOven" element={<PizzaInTheOven />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Info" element={<Info />} />
            <Route path="/PhotoAlbum" element={<PhotoAlbum />} />
          </Routes>
          {/* Toggle Button for Price Calculator */}
          {/*
        <button className="price-calculator-toggle" onClick={() => setShowCalculator(!showCalculator)}>
          {showCalculator ? 'סגור חישוב' : 'חישוב עלות מהיר לפי מספר אנשים'}
        </button>
        */}
        {/* Conditional Rendering of Price Calculator */}
        {showCalculator && <PriceCalculator />}
        </div>

        

        <Footer />
        <WhatsAppIcon />
        <AccessibilityButton />
      </div>
    </Router>
  );
}

export default App;
