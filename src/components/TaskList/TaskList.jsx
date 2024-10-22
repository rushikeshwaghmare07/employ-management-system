import React from 'react';
import TaskCard from './TaskCard';

const TaskList = () => {
  const tasks = [
    {
      priority: 'High',
      date: '22 Oct 2024',
      title: 'Prepare Quarterly Sales Report',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      bgColor: 'bg-red-400',
    },
    {
      priority: 'High',
      date: '22 Oct 2024',
      title: 'Edit a blog post',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      bgColor: 'bg-blue-500',
    },
    {
      priority: 'Medium',
      date: '23 Oct 2024',
      title: 'Client Meeting Prep',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      bgColor: 'bg-green-500',
    },
    {
      priority: 'Low',
      date: '24 Oct 2024',
      title: 'Team Building Activity',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      bgColor: 'bg-yellow-500',
    },
  ];

  return (
    <div
      id="taskList"
      className="flex items-center justify-start gap-5 overflow-x-auto h-[50%] w-full py-5 mt-10"
    >
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          priority={task.priority}
          date={task.date}
          title={task.title}
          description={task.description}
          bgColor={task.bgColor}
        />
      ))}
    </div>
  );
};

export default TaskList;
