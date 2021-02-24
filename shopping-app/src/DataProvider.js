import React, { useContext, useReducer } from "react";

export const DataContext = React.createContext();

export function DataProvider({ children, reducer, initialState }) {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
