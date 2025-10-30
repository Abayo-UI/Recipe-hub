import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {

  const [ searchTerm, setSearchTerm ] = useState('');

  return (  
  <GlobalContext.Provider value={{ searchTerm, setSearchTerm }}>
    { children }
  </GlobalContext.Provider>
  )
};
