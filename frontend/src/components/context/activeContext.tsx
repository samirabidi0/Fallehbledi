'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ActiveContextProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActiveContext = createContext<ActiveContextProps | undefined>(undefined);

export const ActiveProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

export const useActive = () => {
  const context = useContext(ActiveContext);
  if (context === undefined) {
    throw new Error('useActive must be used within an ActiveProvider');
  }
  return context;
};