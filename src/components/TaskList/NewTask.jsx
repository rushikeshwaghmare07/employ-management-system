import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-72 p-5 bg-green-500 text-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-xs px-2 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-4 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="bg-white text-green-500 px-4 py-2 rounded-md hover:bg-green-100 transition w-full">
          Accept data
        </button>
      </div>
    </div>
  );
};

export default NewTask;
