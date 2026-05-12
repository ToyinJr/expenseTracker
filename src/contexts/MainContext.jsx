import React, { useState } from "react";

export const MainContext = React.createContext();


export const MainProvider = ({ children }) => {
  let [formData, setFormData] = useState([]);
  let [id, setId] = useState(0);

  let totalArray = formData.map((item) => {
    return Number(item.amount);
  });

  let sum = totalArray.reduce((acc, curr) => Number(acc) + Number(curr), 0);

  let [selected, setSelected] = useState("");

  const valueData = {
    formData,
    setFormData,
    id,
    setId,
    sum,
    selected,
    setSelected,
  };

  return (
  <MainContext.Provider value={valueData}>{children}</MainContext.Provider>
  )


};
