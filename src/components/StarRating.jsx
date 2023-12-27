import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  const totalStars = 5; 

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<span style={{color: "gold", fontSize: "20px"}} key={i}>&#9733;</span>); // Étoile pleine si égale ou inférieure à la note
    } else {
      stars.push(<span style={{color: "gold", fontSize: "20px"}} key={i}>&#9734;</span>); // Étoile vide sinon
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
