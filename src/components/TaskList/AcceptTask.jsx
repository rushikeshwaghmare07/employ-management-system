import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 w-72 p-5 bg-red-500 text-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-xs px-2 py-1 rounded">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
      </div>
      <h2 className="mt-4 text-xl font-semibold">Make a YouTube Video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, tempora.
      </p>
      <div className="flex justify-between mt-4 space-x-2">
        <button className="bg-green-600 px-4 py-2 text-xs rounded-md hover:bg-green-700 transition">
          Mark as Completed
        </button>
        <button className="bg-red-600 px-4 py-2 text-xs rounded-md hover:bg-red-700 transition">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
