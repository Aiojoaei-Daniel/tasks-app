import React, { useState } from "react";
import "./task.css";

const Task = ({ task, selectItems, setTasks, currentTasks }) => {
  const handleSelect = (action) => {
    const tasks = currentTasks.map((currentTask) => {
      if (currentTask.id === task.id) {
        return { ...task, [action]: !task[action] };
      } else {
        if (action === "isSelected")
          return { ...currentTask, isSelected: false };

        return currentTask;
      }
    });

    setTasks(tasks);
  };

  console.log(currentTasks);

  return (
    <div className="task">
      <div className="input-container">
        <input
          type="checkbox"
          style={{ display: selectItems ? "inline" : "none" }}
          onClick={() => handleSelect("toBeDeleted")}
        />
      </div>
      <div className="task-content" onClick={() => handleSelect("isSelected")}>
        <h1>
          <i
            className="fas fa-clipboard-list"
            style={{ marginRight: "10px" }}
          ></i>
          {task.title} <span style={{ color: "gray" }}>#{task.id}</span>
        </h1>
        <p>{task.text}</p>
        <p>
          <i className="fas fa-calendar-alt"></i>{" "}
          <b>Tuesday, October 18, 2022</b>
        </p>
      </div>
    </div>
  );
};

export default Task;
