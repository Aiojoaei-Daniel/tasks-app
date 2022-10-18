import React from "react";

import NotFound from "../../../components/NotFound/NotFound";

import "./taskDetails.css";

const TaskDetails = ({ selectedTask }) => {
  return Object.keys(selectedTask).length !== 0 ? (
    <div className="task-details">
      <h1>
        {selectedTask.title}{" "}
        <span style={{ color: "gray" }}>#{selectedTask.id}</span>
      </h1>
      <p>{selectedTask.text}</p>
    </div>
  ) : (
    <NotFound action={"selected"} />
  );
};

export default TaskDetails;
