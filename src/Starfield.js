import React from 'react';
import './Starfield.css';

class Starfield extends React.Component {
  render() {
    // Create 200 static stars
    const stars = Array.from({ length: 200 }, (_, i) => (
      <div 
        key={`star-${i}`}
        className="star"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.8 + 0.2,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
        }}
      />
    ));

    // Create 5 shooting stars
    const shootingStars = Array.from({ length: 5 }, (_, i) => (
      <div 
        key={`shooting-star-${i}`}
        className="shooting-star"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 15}s`,
        }}
      />
    ));

    return (
      <div className="starfield">
        {stars}
        {shootingStars}
      </div>
    );
  }
}

export default Starfield;
