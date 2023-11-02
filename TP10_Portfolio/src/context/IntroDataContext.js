import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const IntroDataContext = createContext();

const IntroDataProvider = (props) => {
  const [introData, setIntroData] = useState({});

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        setIntroData(result.data.introdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(introData.animated){
    return (
        <IntroDataContext.Provider
        value={{
            introData
        }}
        >
        {props.children}
        </IntroDataContext.Provider>
    );
  }else{
    return(
        <></>
    )
  }
};

export default IntroDataProvider;
