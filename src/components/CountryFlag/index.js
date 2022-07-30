import React, { useEffect, useContext } from "react";
import StoreContext from "../../context";
import "./CountryFlag.css";

const CountryFlag = ({ store }) => {
  const { setFlag, flag } = useContext(StoreContext);

  const code = store.store.attributes.code;
  const url = `https://restcountries.com/v3.1/alpha/${code}`;

  useEffect(() => {
    async function fetchData(code) {
      const res = await fetch(url);
      const re1 = await res.json();
      const re2 = await re1[0].flags.png;
      const obj = { country: code, png: re2 };

      setFlag((flag) => ({ ...flag, ...obj }));
    }
    fetchData(code);
  }, []);

  // async function fetchData(code) {
  //   try {
  //     let res = await fetch(
  //       `https://restcountries.com/v3.1/alpha/${code}`
  //     ).then((response) =>
  //       response.json().then((data) => {
  //         return data[0].flags.png;
  //       })
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="flagWrapper">
      {code === flag.country ? (
        <img className="flag" src={flag.png} alt="flag" />
      ) : null}
    </div>
  );
};

export default CountryFlag;
