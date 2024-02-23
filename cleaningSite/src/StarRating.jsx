// Rating.js
import React from "react";
import Star from "./star";

const Rating = ({ value }) => {
  const maxStars = 5;
  const filledStars = Math.min(value, maxStars);

  return (
    <div>
      {[...Array(maxStars)].map((_, index) => (
        <Star key={index} filled={index < filledStars} />
      ))}
    </div>
  );
};

export default Rating;
