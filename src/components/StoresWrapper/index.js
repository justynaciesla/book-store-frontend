import React, { useContext } from "react";
import Store from "../Store";
import "./StoreWrapper.css";
import StoreContext from "../../context";

const StoresWrapper = () => {
  const { stores } = useContext(StoreContext);

  return (
    <div className="background">
      {stores.map((store) => (
        <Store store={store} />
      ))}
    </div>
  );
};

export default StoresWrapper;
