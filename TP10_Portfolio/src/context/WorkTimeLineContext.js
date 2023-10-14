import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WorkTimeLineContext = createContext();

const WorkTimeLineProvider = (props) => {
  const [workTimeLine, setWorkTimeLine] = useState([]);

  useEffect(() => {
    axios
      .get("../../data.json")
      .then((result) => {
        setWorkTimeLine(result.data.worktimeline);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <WorkTimeLineContext.Provider
      value={{
        workTimeLine
      }}
    >
      {props.children}
    </WorkTimeLineContext.Provider>
  );
};

export default WorkTimeLineProvider;
