import React, { useState, useEffect } from "react";
import StoreContext from "./context";
import StoresWrapper from "./components/StoresWrapper";

const Root = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stores").then((response) =>
      response.json().then((data) => {
        setStores(data.data);
      })
    );
  }, []);

  return (
    <StoreContext.Provider value={{ stores }}>
      <StoresWrapper />
    </StoreContext.Provider>
  );
};

export default Root;
