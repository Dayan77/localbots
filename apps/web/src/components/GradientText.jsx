
import React from 'react';

const GradientText = ({ children, className = "", glow = false }) => {
  return (
    <span className={`bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent ${glow ? 'text-glow-primary' : ''} ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
