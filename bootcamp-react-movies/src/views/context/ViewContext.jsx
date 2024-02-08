import { useContext } from "react";
import { createContext, useState } from "react";

export const AppContext = createContext();


//HOC: high Order Component
export const AppContextProvider = ({ children }) => {
  //useState
  const [getContextValue, setContextValue] = useState('valor inicial');

  return (
    <AppContext.Provider value={{ getContextValue, setContextValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  
  if (context === undefined) {
    throw new Error(
      "use AppContext debe estar dentro de un AppContextProvider"
    );
  }
  return context;
};
