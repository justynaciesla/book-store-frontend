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

  useEffect(() => {
    let flags = [];

    const fetchData = async () => {
      await fetch(url).then((response) =>
        response.json().then((data) => {
          const urls = data.included
            .filter((item) => item.type === "countries")
            .map((i) => i.attributes.code)
            .map((j) => `https://restcountries.com/v3.1/alpha/${j}`);

          const fetchFlag = async () => {
            urls.map(async (url) => {
              await fetch(url).then((response) =>
                response.json().then((data) => {
                  flags.push(data[0].flags.png);
                })
              );
            });
            setFlag(flags);
          };
          fetchFlag();
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
