import React from 'react';
import Header from '../Layout/Header';
import TaskSummary from './Widgets/TaskSummary';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className='p-5 sm:p-10 bg-[#1C1C1C] min-h-screen'>
      <Header />
      <TaskSummary />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
