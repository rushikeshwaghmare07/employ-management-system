import React from "react";
// import TaskCard from './TaskCard';
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div id="taskList" className="mt-10 flex overflow-x-auto space-x-6 pb-6">
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} />;
        }
        if (elem.newTask) {
          <NewTask key={index} />;
        }
        if (elem.completed) {
          <CompleteTask key={index} />;
        }
        if (elem.failed) {
          <FailedTask key={index} />;
        }
        return null; // To handle any cases that don't match the above conditions
      })}
    </div>
  );
};

export default TaskList;
