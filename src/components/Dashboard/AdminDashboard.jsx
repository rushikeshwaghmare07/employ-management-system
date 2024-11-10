import React from "react";
import Header from "../Layout/Header";
import CreateTask from "./Widgets/CreateTask";
import AllTask from "./Widgets/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-5">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
