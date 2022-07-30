import React from "react";
import BestSellingBooks from "../BestSellingBooks";
import Rating from "../Rating";
import DateAndWebsite from "../DateAndWebsite";
import "./Store.css";
import CountryFlag from "../CountryFlag";

const Store = (store) => {
  const { name, establishmentDate, rating, storeImage, website } =
    store.store.data.attributes;

  return (
    <div className="mainWrapper">
      <div className="storeWrapper">
        <img alt="storeImg" src={storeImage} className="storeImage" />
        <div className="storeInfoWrapper">
          <div className="nameAndRateWrapper">
            <h1 className="storeName">{name}</h1>
            <Rating rating={rating} />
          </div>
          <BestSellingBooks store={store} />
        </div>
      </div>
      <div className="websiteAndFlagWrapper">
        <DateAndWebsite
          establishmentDate={establishmentDate}
          website={website}
        />

        {/* I am straggeling with extracting png for flag image.
          Because of that I leave here commented code. 
          I would be happy to come back to it after my holidays */}

        {/* <CountryFlag store={store} /> */}
      </div>
    </div>
  );
};

export default Store;
