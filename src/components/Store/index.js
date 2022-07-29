import React, { useContext, useEffect } from "react";
import StoreContext from "../../context";
import BestSellingBooks from "../BestSellingBooks";
import Rating from "../Rating";
import DateAndWebsite from "../DateAndWebsite";
import "./Store.css";

const Store = (store) => {
  const { setStores } = useContext(StoreContext);
  const { name, establishmentDate, rating, storeImage, website } =
    store.store.data.attributes;

  // useEffect(() => {
  //   const fetchData = async (code) => {
  //     await fetch(`https://restcountries.com/v3.1/alpha/${code}`).then(
  //       (response) =>
  //         response.json().then((data) => {
  //           store.flag = data[0].flags;
  //           setStores(...store, store.flag);

  //           // const flag = data[0].flags;
  //           // console.log(flag);
  //         })
  //     );
  //   };

  //   fetchData(store.store.attributes.code);
  // }, []);

  // console.log(store);

  //   const fetchData = async (code) => {
  //     await fetch(`https://restcountries.com/v3.1/alpha/${code}`).then(
  //       (response) =>
  //         response.json().then((data) => {
  //           setStores(stores, ...data);
  //         })
  //     );
  //   };

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
      <DateAndWebsite establishmentDate={establishmentDate} website={website} />
    </div>
  );
};

export default Store;
