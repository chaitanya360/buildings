import { useState } from "react";
import { createContext } from "react";

export const compareContext = createContext();

export const CompareProvider = (props) => {
  const [compareItemsIds, setCompareItemsId] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  return (
    <compareContext.Provider
      value={[compareItemsIds, setCompareItemsId, showCompare, setShowCompare]}
    >
      {props.children}
    </compareContext.Provider>
  );
};
