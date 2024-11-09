import React from "react";

<<<<<<< HEAD
const AcceptTask = ({ data }) => {
=======
const AcceptTask = ({data}) => {
>>>>>>> b308fed3d148fe87a2807c1711e4acc0029011c8
  return (
    <div className="flex-shrink-0 w-72 p-5 bg-red-500 text-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-xs px-2 py-1 rounded">
<<<<<<< HEAD
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-4 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
=======
        {/* {data.category} */}category
        </h3>
        <h4 className="text-sm">
          {/* {data.date} */} date
          </h4>
      </div>
      <h2 className="mt-4 text-xl font-semibold">
        {/* {data.title} */} title
        </h2>
      <p className="text-sm mt-2">
      {/* {data.description} */} des
      </p>
>>>>>>> b308fed3d148fe87a2807c1711e4acc0029011c8
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
