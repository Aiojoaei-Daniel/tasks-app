import React from "react";

import "./tasksSelectionBar.css";

const TasksSelectionBar = ({ handleDelete, handleSelect }) => {
  return (
    <div className="select-items">
      <button onClick={handleSelect}>
        <i className="fas fa-sitemap"></i> Select Items
      </button>
      <button>
        <i className="fas fa-sitemap"></i> Add to RFQ
      </button>
      <button onClick={handleDelete}>
        <i className="fas fa-trash"></i> Delete Items
      </button>
    </div>
  );
};

export default TasksSelectionBar;
