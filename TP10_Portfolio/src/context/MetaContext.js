import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MetaContext = createContext();

const MetaProvider = (props) => {
  const [meta, setMeta] = useState({});

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        setMeta(result.data.meta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <MetaContext.Provider
      value={{
        meta
      }}
    >
      {props.children}
    </MetaContext.Provider>
  );
};

export default MetaProvider;
