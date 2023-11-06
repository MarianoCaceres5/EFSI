import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataPortfolioContext = createContext();

const DataPortfolioProvider = (props) => {

  const [contactConfig, setContactConfig] = useState({});
  const [dataAbout, setDataAbout] = useState({});
  const [introData, setIntroData] = useState({});
  const [logoText, setLogoText] = useState('');
  const [meta, setMeta] = useState({});
  const [services, setServices] = useState([]);
  const [skills, setSkills] = useState([]);
  const [socialProfils, setSocialProfils] = useState({});
  const [workTimeLine, setWorkTimeLine] = useState([]);
  const [creations, setCreations] = useState([]);

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        setContactConfig(result.data.contactConfig);
        setDataAbout(result.data.dataabout);
        setIntroData(result.data.introdata);
        setLogoText(result.data.logotext);
        setMeta(result.data.meta);
        setServices(result.data.services);
        setSkills(result.data.skills);
        setSocialProfils(result.data.socialprofils);
        setWorkTimeLine(result.data.worktimeline);
        setCreations(result.data.creations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (introData.animated) {
    return (
      <DataPortfolioContext.Provider
        value={{
          contactConfig,
          dataAbout,
          introData,
          logoText,
          meta,
          services,
          skills,
          socialProfils,
          workTimeLine,
          creations
        }}
      >
        {props.children}
      </DataPortfolioContext.Provider>
    );
  } else {
    return (
      <></>
    )
  }
};

export default DataPortfolioProvider;
