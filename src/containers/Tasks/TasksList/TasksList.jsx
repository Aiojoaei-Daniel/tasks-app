import React from "react";

import Task from "./Task/Task";
import TasksSelectionBar from "./TasksSelectionBar/TasksSelectionBar";

import "./tasksList.css";

const TasksList = ({
  tasks,
  setSelectedTask,
  selectItems,
  setTasks,
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
            setSelectedTask={setSelectedTask}
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
