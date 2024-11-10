import React from "react";
const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-72 p-5 bg-yellow-500 text-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-xs px-2 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-4 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="w-full bg-white text-yellow-600 py-2 rounded-md hover:bg-yellow-100 transition">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
