import React from "react";
import { v4 as uuidv4 } from "uuid";
import Star from "../../assets/icons/fullStar.png";
import OutlinedStar from "../../assets/icons/star.png";
import "./Rating.css";

const Rating = ({ rating }) => {
  const renderStars = (rating) => {
    let starArray = [];
    for (let i = 0; i < rating; i++) {
      starArray.push(Star);
    }

    let emptyStarCount = 5 - rating;
    for (let i = 0; i < emptyStarCount; i++) {
      starArray.push(OutlinedStar);
    }

    return starArray.map((starImg) => (
      <img key={uuidv4()} src={starImg} alt="starImg" className="starImg" />
    ));
  };

  return <div>{renderStars(rating)}</div>;
};

export default Rating;
