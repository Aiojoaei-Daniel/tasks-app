import React, { useState } from "react";
import TasksList from "./TasksList/TasksList";
import TaskDetails from "./TaskDetails/TaskDetails";
import SearchBar from "../../components/SearchBar/SearchBar";

import SortBtns from "./SortBtns/SortBtns";
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

    let selectedTaskAvailable = true;

    for (let task of remainingTasks) {
      if (task.id === selectedTask.id) {
        selectedTaskAvailable = true;
        break;
      } else {
        selectedTaskAvailable = false;
      }
    }
    if (!selectedTaskAvailable) {
      setSelectedTask({});
    }
  };

  return (
    <div className="tasks-page">
      <div className="filters-container">
        <SearchBar setSearchValue={setSearchValue} />
        <SortBtns />
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
        <button onClick={handleSelect}>
          <i className="fas fa-sitemap"></i> Select Items
        </button>
        <button>
          <i className="fas fa-sitemap"></i> Add to RFQ
        </button>
        <button onClick={handleDelete} disabled={!selectItems}>
          <i className="fas fa-trash"></i> Delete Items
        </button>
      </div>
    </div>
  );
};

export default Tasks;
