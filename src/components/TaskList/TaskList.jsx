import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
<<<<<<< HEAD
=======

  console.log("tasklist",data)
>>>>>>> b308fed3d148fe87a2807c1711e4acc0029011c8
  return (
    <div id="taskList" className="mt-10 flex overflow-x-auto space-x-6 pb-6">
      {data.tasks.map((elem, index) => {
        if (elem.active) {
<<<<<<< HEAD
          return <AcceptTask key={index} data={elem} />;
        }
        if (elem.newTask) {
          <NewTask key={index} data={elem} />;
        }
        if (elem.completed) {
          <CompleteTask key={index} data={elem} />;
        }
        if (elem.failed) {
          <FailedTask key={index} data={elem} />;
=======
          return <AcceptTask key={index}  />;
        }
        if (elem.newTask) {
          <NewTask key={index}  />;
        }
        if (elem.completed) {
          <CompleteTask key={index}  />;
        }
        if (elem.failed) {
          <FailedTask key={index}  />;
>>>>>>> b308fed3d148fe87a2807c1711e4acc0029011c8
        }
        return null; // To handle any cases that don't match the above conditions
      })}
    </div>
  );
};

export default TaskList;
