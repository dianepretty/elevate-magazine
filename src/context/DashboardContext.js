// src/contexts/DashboardContext.js
import { createContext, useContext, useState } from "react";

// Create the Dashboard Context
const DashboardContext = createContext();

// Create a DashboardProvider to wrap around the component tree
export const DashboardProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("home"); // Default component is 'home'

  const changeActiveComponent = (component) => {
    setActiveComponent(component); // Update active component
  };

  return (
    <DashboardContext.Provider value={{ activeComponent, changeActiveComponent }}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to use the DashboardContext
export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
