import React, { useState } from "react";
import "./task.css";

const Task = ({ task, setSelectedTask, selectItems, setTasks }) => {
  const handleCheck = () => {
    setTasks((currentTasks) =>
      currentTasks.map((currentTask) => {
        if (currentTask.id === task.id) {
          return { ...task, isSelected: !task.isSelected };
        } else {
          return currentTask;
        }
      })
    );
  };

  return (
    <div className="task">
      <div className="input-container">
        <input
          type="checkbox"
          style={{ display: selectItems ? "inline" : "none" }}
          onClick={handleCheck}
        />
      </div>
      <div className="task-content" onClick={() => setSelectedTask(task)}>
        <h1>
          <i
            className="fas fa-clipboard-list"
            style={{ marginRight: "10px" }}
          ></i>
          {task.title} <span style={{ color: "gray" }}>#{task.id}</span>
        </h1>
        <p>{task.text}</p>
        <p>details</p>
      </div>
    </div>
  );
};

export default Task;
