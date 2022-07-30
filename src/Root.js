import React, { useState, useEffect } from "react";
import StoreContext from "./context";
import StoresWrapper from "./components/StoresWrapper";

const Root = () => {
  const [stores, setStores] = useState([]);
  const [flag, setFlag] = useState([]);

  const url = "http://localhost:3000/stores";

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url).then((response) =>
        response.json().then((data) => {
          setStores(data);
        })
      );
    };
    fetchData();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        stores,
        flag,
        setFlag,
        setStores,
      }}
    >
      <StoresWrapper />
    </StoreContext.Provider>
  );
};

export default Root;
