import React from 'react';

const TaskSummary = () => {
  return (
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
      <div className='rounded-xl py-6 px-9 bg-blue-500 text-white'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl py-6 px-9 bg-green-500 text-white'>
        <h2 className='text-3xl font-semibold'>3</h2>
        <h3 className='text-2xl font-medium'>Completed</h3>
      </div>
      <div className='rounded-xl py-6 px-9 bg-yellow-500 text-white'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-2xl font-medium'>Accepted</h3>
      </div>
      <div className='rounded-xl py-6 px-9 bg-red-500 text-white'>
        <h2 className='text-3xl font-semibold'>1</h2>
        <h3 className='text-2xl font-medium'>Failed</h3>
      </div>
    </div>
  );
};

export default TaskSummary;
