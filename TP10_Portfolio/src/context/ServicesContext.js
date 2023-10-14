import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ServicesContext = createContext();

const ServicesProvider = (props) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        setServices(result.data.services);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ServicesContext.Provider
      value={{
        services
      }}
    >
      {props.children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
