// AccessibilityButton.js
import React, { useState } from 'react';

const AccessibilityButton = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [isTextToSpeechEnabled, setIsTextToSpeechEnabled] = useState(false);

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
    document.body.style.filter = 'none';
    document.body.style.fontSize = '16px';
    setIsTextToSpeechEnabled(false);
  };

  const toggleTextToSpeech = () => {
    setIsTextToSpeechEnabled((prev) => !prev);
    if (!isTextToSpeechEnabled) {
      const message = "Accessibility features enabled. You can now increase font size, toggle contrast, or reset settings.";
      const speech = new SpeechSynthesisUtterance(message);
      window.speechSynthesis.speak(speech);
    } else {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    }}>
      <button onClick={toggleContrast} style={buttonStyle}>
        Toggle Contrast
      </button>
      <button onClick={increaseFontSize} style={buttonStyle}>
        Increase Font Size
      </button>
      <button onClick={decreaseFontSize} style={buttonStyle}>
        Decrease Font Size
      </button>
      <button onClick={resetAccessibility} style={buttonStyle}>
        Reset
      </button>
      <button onClick={toggleTextToSpeech} style={buttonStyle}>
        {isTextToSpeechEnabled ? 'Stop Speech' : 'Enable Speech'}
      </button>
    </div>
  );
};

// Style for the buttons
const buttonStyle = {
  backgroundColor: '#25D366', // Match WhatsApp button color
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  padding: '10px',
  fontSize: '14px',
  cursor: 'pointer',
  width: '150px', // Button width
  height: '50px', // Button height
};

export default AccessibilityButton;
