import React from "react";
import SearchBar from "./../SearchBar/SearchBar";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="home">
        <input placeholder="Search ..." />
        <p>
          <i className="fas fa-home"></i> HOME
        </p>
      </div>
      <div className="workspace">
        <p>Workspace</p>
        <h1>
          <i className="fas fa-square"></i> DASHBOARD
        </h1>
        <h1>
          <i className="fas fa-folder"></i> PROJECTS
        </h1>
        <h1>
          <i className="fas fa-toolbox"></i> WORKS
        </h1>
        <h1>
          <i className="fas fa-tools"></i> SETTINGS
        </h1>
        <h1>
          <i className="fas fa-users"></i> USER AND PERMISION
        </h1>
        <h1>
          <i className="fas fa-tools"></i> MARKETPLACE
        </h1>
      </div>
      <div className="recent">
        <p>Recent</p>
        <h1>
          <i className="fas fa-folder"></i> Project 1
        </h1>
        <h1>
          <i className="fas fa-folder-open"></i> Work 12
        </h1>
        <h1>
          <i className="fas fa-folder"></i> Project 3
        </h1>
        <h1>
          <i className="fas fa-folder"></i> Project 4
        </h1>
        <h1>
          <i className="fas fa-folder-open"></i> Work 5
        </h1>
      </div>
      <div className="pinned">
        <p>Pinned</p>
        <h1>
          <i className="fas fa-folder"></i> Project 1
        </h1>
        <h1>
          <i className="fas fa-folder-open"></i> Work 12
        </h1>
        <h1>
          <i className="fas fa-folder"></i> Project 3
        </h1>
        <h1>
          <i className="fas fa-folder"></i> Project 4
        </h1>
        <h1>
          <i className="fas fa-folder-open"></i> Work 5
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
