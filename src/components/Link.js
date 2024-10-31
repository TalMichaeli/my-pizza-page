// Link.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ imageSrc, altText, linkText, target }) => {
  return (
    <RouterLink to={target} className="link-item">
      <img src={imageSrc} alt={altText} className="link-image" />
      <span>{linkText}</span>
    </RouterLink>
  );
};

export default Link;
