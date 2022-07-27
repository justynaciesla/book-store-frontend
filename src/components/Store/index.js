import React from "react";
import "./Store.css";
import Star from "../../assets/icons/fullStar.png";
import OutlinedStar from "../../assets/icons/star.png";
import BestSellingBooks from "../BestSellingBooks";
import Rating from "../Rating";
import DateAndWebsite from "../DateAndWebsite";

const Store = (store) => {
  const { name, establishmentDate, rating, storeImage, website } =
    store.store.attributes;

  return (
    <div className="mainWrapper">
      <div className="storeWrapper">
        <img alt="storeImg" src={storeImage} className="storeImage" />

        <div className="storeInfoWrapper">
          <div className="nameAndRateWrapper">
            <h1 className="storeName">{name}</h1>
            <Rating rating={rating} />
          </div>
          <BestSellingBooks />
        </div>
      </div>
      <DateAndWebsite establishmentDate={establishmentDate} website={website} />
    </div>
  );
};

export default Store;
