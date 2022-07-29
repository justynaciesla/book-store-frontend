import React, { useState, useEffect } from "react";
import StoreContext from "./context";
import StoresWrapper from "./components/StoresWrapper";

const Root = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/stores").then((response) =>
        response.json().then((data) => {
          setStores(data);
        })
      );
    };
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ stores, setStores }}>
      <StoresWrapper />
    </StoreContext.Provider>
  );
};

export default Root;
