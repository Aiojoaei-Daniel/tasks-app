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
  const [searchValue, setSearchValue] = useState("");
  const [selectItems, setSelectItems] = useState(false);

  const searchedTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = () => {
    setSelectItems((oldVal) => !oldVal);
  };

  const handleDelete = () => {
    const remainingTasks = tasks.filter((task) => !task.toBeDeleted);

    setTasks(remainingTasks);
  };

  return (
    <div className="tasks-page">
      <div className="header">
        <p>
          <b>LinkQuip</b> #NEXT -LPQ0922
        </p>
        <div className="filters-container">
          <SearchBar setSearchValue={setSearchValue} />
          <SortBtns />
        </div>
      </div>
      <div className="tasks-container">
        {searchedTasks.length !== 0 ? (
          <TasksList
            tasks={searchedTasks}
            setTasks={setTasks}
            selectItems={selectItems}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        ) : (
          <NotFound action={"found"} />
        )}
        <TaskDetails tasks={tasks} />
      </div>
    </div>
  );
};

export default Tasks;
