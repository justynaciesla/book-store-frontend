import React from "react";
import BestSellingBooks from "../BestSellingBooks";
import Rating from "../Rating";
import DateAndWebsite from "../DateAndWebsite";
import CountryFlag from "../CountryFlag";
import "./Store.css";

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
        <CountryFlag store={store} />
      </div>
    </div>
  );
};

export default Store;
