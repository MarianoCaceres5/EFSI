import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataPortfolioContext = createContext();

const DataPortfolioProvider = (props) => {
  const [dataPortfolio, setDataPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        setDataPortfolio(result.data.dataportfolio);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DataPortfolioContext.Provider
      value={{
        dataPortfolio,
      }}
    >
      {props.children}
    </DataPortfolioContext.Provider>
  );
};

export default DataPortfolioProvider;
