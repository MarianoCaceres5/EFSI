import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataAboutContext = createContext();

const DataAboutProvider = (props) => {
  const [dataAbout, setDataAbout] = useState({});

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        setDataAbout(result.data.dataabout);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DataAboutContext.Provider
      value={{
        dataAbout
      }}
    >
      {props.children}
    </DataAboutContext.Provider>
  );
};

export default DataAboutProvider;
