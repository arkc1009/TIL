import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext(null);

export const PageProvider = ({ children }) => {
  const [state, setState] = useState({ curPage: 1, limitSize: 5 });

  const changeCurPage = (value) => {
    setState((prevState) => ({ ...prevState, curPage: value }));
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Context.Provider value={[state, changeCurPage]}>
      {children}
    </Context.Provider>
  );
};

const usePages = () => useContext(Context);

export default usePages;
