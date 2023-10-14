import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LogoTextContext = createContext();

const LogoTextProvider = (props) => {
  const [logoText, setLogoText] = useState('');

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        setLogoText(result.data.logotext);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <LogoTextContext.Provider
      value={{
        logoText,
      }}
    >
      {props.children}
    </LogoTextContext.Provider>
  );
};

export default LogoTextProvider;
