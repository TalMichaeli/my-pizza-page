// AccessibilityButton.js
import React, { useState } from 'react';
import accessibilityImage from '../photos/accessibillity.png'; // Adjust the import path
import './AccessibilityButton.css'; // Import the CSS file

const AccessibilityButton = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isTextToSpeechEnabled, setIsTextToSpeechEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleOptions = () => {
    setIsOptionsVisible((prev) => !prev);
  };

  const toggleContrast = () => {
    setIsHighContrast((prev) => !prev);
    document.body.style.filter = !isHighContrast ? 'contrast(1.5)' : 'none';
  };

  const increaseFontSize = () => {
    const newSize = fontSize + 2;
    setFontSize(newSize);
    document.body.style.fontSize = `${newSize}px`;
  };

  const decreaseFontSize = () => {
    if (fontSize > 10) {
      const newSize = fontSize - 2;
      setFontSize(newSize);
      document.body.style.fontSize = `${newSize}px`;
    }
  };

  const resetAccessibility = () => {
    setIsHighContrast(false);
    setFontSize(16);
    setIsDarkMode(false);
    document.body.style.filter = 'none';
    document.body.style.fontSize = '16px';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    setIsTextToSpeechEnabled(false);
  };

  const toggleTextToSpeech = () => {
    setIsTextToSpeechEnabled((prev) => !prev);
    if (!isTextToSpeechEnabled) {
      const message = "Accessibility features enabled. You can now increase font size, toggle contrast, or reset settings.";
      const speech = new SpeechSynthesisUtterance(message);
      window.speechSynthesis.speak(speech);
    } else {
      window.speechSynthesis.cancel();
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#E0E0E0';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <div className="accessibility-container" style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    }}>
      {/* Main button with background image for showing/hiding options */}
      <button onClick={toggleOptions} className="icon-button">
        <img src={accessibilityImage} alt="Accessibility" style={{ width: '100%', height: '100%' }} />
      </button>

      {/* Conditional rendering for accessibility options */}
      {isOptionsVisible && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '60px' }}>
          <button onClick={toggleContrast} className="option-button">
            ניגודיות
          </button>
          <button onClick={increaseFontSize} className="option-button">
         
            להגדיל פונט
          </button>
          <button onClick={decreaseFontSize} className="option-button">
          להקטין פונט
          </button>
          <button onClick={toggleDarkMode} className="option-button">
            {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
          </button>
          <button onClick={toggleTextToSpeech} className="option-button">
            {isTextToSpeechEnabled ? 'ביטול שמע' : 'אפשר שמע'}
          </button>
          <button onClick={resetAccessibility} className="option-button">
            אתחל
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;
