import { createContext } from "react";
import { person } from "../components/Person";

export const PersonContext = createContext();

const PersonContextProvider = ({ children }) => {
  return (
    <PersonContext.Provider value={{ person }}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
