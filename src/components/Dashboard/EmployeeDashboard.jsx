import React from 'react';
import Header from '../Layout/Header';
import TaskSummary from './Widgets/TaskSummary';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className='p-5 sm:p-10 bg-[#1C1C1C] min-h-screen'>
      <Header data={props.data} />
      <TaskSummary data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
