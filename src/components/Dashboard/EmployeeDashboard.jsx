import React from 'react';
import Header from '../Layout/Header';
import TaskListNumbers from './Widgets/TaskSummary';

const EmployeeDashboard = () => {
  return (
    <div className='p-5 sm:p-10 bg-[#1C1C1C] min-h-screen'>
      <Header />
      <TaskListNumbers />
    </div>
  );
};

export default EmployeeDashboard;
