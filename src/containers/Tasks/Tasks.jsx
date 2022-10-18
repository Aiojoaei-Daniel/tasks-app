import React, { useState, useEffect } from "react";
import TasksList from "./TasksList/TasksList";
import TaskDetails from "./TaskDetails/TaskDetails";
import SearchBar from "../../components/SearchBar/SearchBar";

import NotFound from "./../../components/NotFound/NotFound";

import localTasks from "./../../tasks.json";

import "./tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState(localTasks);
  const [selectedTask, setSelectedTask] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [selectItems, setSelectItems] = useState(false);

  const searchedTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = () => {
    setSelectItems((oldVal) => !oldVal);
  };

  const handleDelete = () => {
    const remainingTasks = tasks.filter((task) => !task.isSelected);
    setTasks(remainingTasks);
  };

  return (
    <div className="tasks-page">
      <div className="filters-container">
        <SearchBar setSearchValue={setSearchValue} />
      </div>
      <div className="tasks-container">
        {searchedTasks.length !== 0 ? (
          <TasksList
            tasks={searchedTasks}
            setSelectedTask={setSelectedTask}
            selectItems={selectItems}
            setTasks={setTasks}
          />
        ) : (
          <NotFound action={"found"} />
        )}
        <TaskDetails selectedTask={selectedTask} />
      </div>
      <div className="select-items">
        <button onClick={handleSelect}>Select Items</button>
        <button onClick={handleDelete}>Delete Items</button>
      </div>
    </div>
  );
};

export default Tasks;
