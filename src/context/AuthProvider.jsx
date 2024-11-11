import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// Create a context for authentication data
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employeesData: [],
    adminData: [],
  });

  useEffect(() => {
    const { employeesData, adminData } = getLocalStorage();

    if (!employeesData || !adminData) {
      setLocalStorage();
    }

    setUserData({ employeesData, adminData });
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
