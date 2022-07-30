import React, { useContext, useEffect } from "react";
import Store from "../Store";
import "./StoreWrapper.css";
import StoreContext from "../../context";

const StoresWrapper = () => {
  const { stores, setFlag, flag } = useContext(StoreContext);
  const storeData = stores.data;
  const storeIncluded = stores.included;
  const filteredData = storeIncluded?.filter(
    (item) => item.type === "countries"
  );

  return (
    <div className="background">
      {storeData?.map((data) => {
        const countryCodeData = filteredData?.find(
          (country) => country.id === data.relationships.countries.data.id
        );

        return <Store store={{ data, ...countryCodeData }} />;
      })}
    </div>
  );
};

export default StoresWrapper;
