import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { admin, employees, getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // context
  const authData = useContext(AuthContext);
  // console.log(authData)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [])

  const handleLogin = (email, password) => {
    if (authData) {
      // Check if the user is an admin
      const admin = authData.adminData.find((e) => email == e.email && e.password == password);
      if (admin) {
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: admin }));
        return;
      }

      // Check if the user is an employee
      const employee = authData.employeesData.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
        return
      }
    }

    alert("Invalid credentials");
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : (user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)  }
    </>
  );
}

export default App;
