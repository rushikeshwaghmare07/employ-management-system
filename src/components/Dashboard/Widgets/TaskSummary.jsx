import React from 'react';

const TaskSummary = ({data}) => {
  return (
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      <div className='rounded-lg p-6 bg-blue-600 text-white shadow-md'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-lg p-6 bg-green-600 text-white shadow-md'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className='rounded-lg p-6 bg-yellow-500 text-white shadow-md'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted</h3>
      </div>
      <div className='rounded-lg p-6 bg-red-600 text-white shadow-md'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  );
};

export default TaskSummary;
