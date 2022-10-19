import React from "react";

import Task from "./Task/Task";
import TasksSelectionBar from "./TasksSelectionBar/TasksSelectionBar";

import "./tasksList.css";

const TasksList = ({
  tasks,
  setTasks,
  selectItems,
  handleSelect,
  handleDelete,
}) => {
  return (
    <div className="task-list-container">
      <div className="tasks-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            currentTasks={tasks}
            selectItems={selectItems}
            setTasks={setTasks}
          />
        ))}
      </div>
      <TasksSelectionBar
        handleSelect={handleSelect}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TasksList;
