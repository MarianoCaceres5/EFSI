import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ContactConfigContext = createContext();

const ContactConfigProvider = (props) => {
  const [contactConfig, setContactConfig] = useState({});

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        setContactConfig(result.data.contactConfig);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ContactConfigContext.Provider
      value={{
        contactConfig
      }}
    >
      {props.children}
    </ContactConfigContext.Provider>
  );
};

export default ContactConfigProvider;
