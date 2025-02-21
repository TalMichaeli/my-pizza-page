// src/components/PhotoAlbum.js
import React, { useState } from 'react';
import './PhotoAlbum.css'; // Import the CSS file

const photos = [
  
  require('../photos/photo2.jpeg'),
  require('../photos/photo3.jpeg'),
  require('../photos/photo4.jpg'),
  require('../photos/photo6.jpg'),
  require('../photos/photo1.jpg'),
  require('../photos/photo8.jpg'),
  require('../photos/photo9.jpg'),
  require('../photos/photo10.jpg'),
  require('../photos/photo11.jpg'),
  require('../photos/photo12.jpg'),
  require('../photos/photo13.jpg'),
  require('../photos/photo14.jpg'),
  require('../photos/photo15.jpg'),
  require('../photos/photo16.jpg'),
  require('../photos/photo17.jpg'),
  require('../photos/photo18.jpg'),
  require('../photos/photo19.jpg'),
  require('../photos/photo20.jpg'),
  require('../photos/photo21.jpg'),
  require('../photos/photo22.jpg'),
  require('../photos/photo23.jpg'),
  // Add more photos as needed
];

const PhotoAlbum = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="album-container">
      <h1>אלבום התמונות שלנו</h1>
      <div className="photo-container">
        <button onClick={handlePrevious} className="navigation-button">{"<"}</button>
        <img
          src={photos[currentPhotoIndex]}
          alt={`Photo ${currentPhotoIndex + 1}`}
          className="photo-image"
        />
        <button onClick={handleNext} className="navigation-button">{">"}</button>
      </div>
    </div>
  );
};

export default PhotoAlbum;
