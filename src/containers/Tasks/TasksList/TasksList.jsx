import React from "react";

import Task from "./Task/Task";

const TasksList = ({ tasks, setSelectedTask, selectItems, setTasks }) => {
  return (
    <div className="tasks-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          setSelectedTask={setSelectedTask}
          selectItems={selectItems}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export default TasksList;
