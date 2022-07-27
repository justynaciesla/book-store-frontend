import React from "react";
import "./Store.css";
import Star from "../../assets/icons/fullStar.png";
import OutlinedStar from "../../assets/icons/star.png";
import BestSellingBooks from "../BestSellingBooks";

const Store = (store) => {
  const { name, establishmentDate, rating, storeImage, website } =
    store.store.attributes;

  const renderStars = (rating) => {
    let starArray = [];
    for (let i = 0; i < rating; i++) {
      starArray.push(Star);
    }

    let emptyStarCount = 5 - rating;
    for (let i = 0; i < emptyStarCount; i++) {
      starArray.push(OutlinedStar);
    }

    return starArray.map((imgSource) => (
      <img src={imgSource} alt="starImg" className="starImg" />
    ));
  };

  return (
    <div className="storeWrapper">
      <img alt="storeImg" src={storeImage} className="storeImage" />

      <div className="storeInfoWrapper">
        <div className="nameAndRateWrapper">
          <h1 className="storeName">{name}</h1>
          <div>{renderStars(rating)}</div>
        </div>
        <BestSellingBooks />
      </div>
    </div>
  );
};

export default Store;
