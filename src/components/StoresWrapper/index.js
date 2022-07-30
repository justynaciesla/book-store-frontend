import React, { useContext } from "react";
import StoreContext from "../../context";
import { v4 as uuidv4 } from "uuid";
import Store from "../Store";
import "./StoreWrapper.css";

const StoresWrapper = () => {
  const { stores } = useContext(StoreContext);

  const storeData = stores.data;
  const storeIncluded = stores.included;

  const countriesData = storeIncluded?.filter(
    (item) => item.type === "countries"
  );

  return (
    <div className="wrapper">
      {storeData?.map((data) => {
        const countryCodeData = countriesData?.find(
          (country) => country.id === data.relationships.countries.data.id
        );

        return <Store key={uuidv4()} store={{ data, ...countryCodeData }} />;
      })}
    </div>
  );
};

export default StoresWrapper;
