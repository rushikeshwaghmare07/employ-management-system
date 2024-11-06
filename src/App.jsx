import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setAdminInLocalStorage, setEmployeesInLocalStorage } from "./utils/localStorage";

function App() {

  useEffect(() => {
    setEmployeesInLocalStorage();
    setAdminInLocalStorage()
  })

  
  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
