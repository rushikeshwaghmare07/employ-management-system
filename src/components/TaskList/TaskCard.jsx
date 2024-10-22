import React from 'react';

const TaskCard = ({ priority, date, title, description, bgColor }) => {
  return (
    <div className={`flex-shrink-0 p-5 h-full min-w-[250px] sm:w-[300px] ${bgColor} rounded-xl`}>
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">{priority}</h3>
        <h4 className="text-sm text-white">{date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{title}</h2>
      <p className="text-sm mt-2 text-white">{description}</p>
    </div>
  );
};

export default TaskCard;
