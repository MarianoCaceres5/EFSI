import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SocialProfilsContext = createContext();

const SocialProfilsProvider = (props) => {
  const [socialProfils, setSocialProfils] = useState({});

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        console.log("DATA", result.data);
        setSocialProfils(result.data.socialprofils);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SocialProfilsContext.Provider
      value={{
        socialProfils,
      }}
    >
      {props.children}
    </SocialProfilsContext.Provider>
  );
};

export default SocialProfilsProvider;
