import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center sm:items-end justify-between font-medium'>
      <h1 className='text-2xl sm:text-left text-center'>
        Hello, <br /> 
        <span className='text-3xl sm:text-4xl font-semibold'>User 👋</span> 
      </h1>
      <button className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm mt-4 sm:mt-0'>
        Log Out
      </button>
    </div>
  );
};

export default Header;
