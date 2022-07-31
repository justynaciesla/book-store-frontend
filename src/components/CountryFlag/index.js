import React, { useContext } from "react";
import StoreContext from "../../context";
import "./CountryFlag.css";

const CountryFlag = ({ store }) => {
  const { flags } = useContext(StoreContext);

  const code = store.store.attributes.code;
  const lowercaseCode = code.toLowerCase() + ".png";

  const renderFlag = () => {
    const url = flags.find((item) => item.slice(-6) === lowercaseCode);
    return <img className="flag" src={url} alt="flag" />;
  };

  return <div className="flagWrapper">{renderFlag()}</div>;
};

export default CountryFlag;
