import React, { useContext } from "react";
import StoreContext from "../../context";
import "./CountryFlag.css";

const CountryFlag = ({ store }) => {
  const { flag } = useContext(StoreContext);
  const code = store.store.attributes.code;
  const lowercaseCode = code.toLowerCase();

  const renderFlag = () => {
    const url = flag.find((item) => item.slice(-6) === lowercaseCode + ".png");
    return <img className="flag" src={url} alt="flag" />;
  };

  return <div className="flagWrapper">{renderFlag()}</div>;
};

export default CountryFlag;
