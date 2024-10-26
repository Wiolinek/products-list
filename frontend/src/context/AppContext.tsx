import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Filters } from 'interfaces/filter.enum';

interface AppContextType {
  selectedFilter: Filters;
  setSelectedFilter: React.Dispatch<React.SetStateAction<Filters>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFilter, setSelectedFilter] = useState<Filters>(Filters.dogs);

  const providedValues = { selectedFilter, setSelectedFilter };

  return <AppContext.Provider value={providedValues}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a ContextProvider');
  }
  return context;
};

export { ContextProvider, useAppContext };
