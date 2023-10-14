import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SkillsContext = createContext();

const SkillsProvider = (props) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        setSkills(result.data.skills);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SkillsContext.Provider
      value={{
        skills
      }}
    >
      {props.children}
    </SkillsContext.Provider>
  );
};

export default SkillsProvider;
