import React from "react";
import { createContext, useState } from "react";

export const DataContext = createContext("");

const DataContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);
  const [navCount, setNavCount] = useState(0);
  const [productCount, setProductCount] = useState(1);

  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        selected,
        setSelected,
        navCount,
        setNavCount,
        productCount,
        setProductCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
