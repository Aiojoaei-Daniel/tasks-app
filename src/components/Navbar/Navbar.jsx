import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <ul>
      <div className="navbar-menu">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <li>
        <Link to="/overview" className="navbar-btn">
          OVERVIEW
        </Link>
      </li>
      <li>
        <Link to="/activity" className="navbar-btn">
          ACTIVITY
        </Link>
      </li>
      <li>
        <Link to="/logs" className="navbar-btn">
          LOGS
        </Link>
      </li>
      <li>
        <Link to="/reports" className="navbar-btn">
          REPORTS
        </Link>
      </li>
      <li>
        <Link to="/tasks" className="navbar-btn">
          TASKS
        </Link>
      </li>
      <li>
        <Link to="/transactions" className="navbar-btn">
          TRANSACTIONS
        </Link>
      </li>
      <li>
        <Link to="/quotations" className="navbar-btn">
          QUATATIONS
        </Link>
      </li>
      <li>
        <Link to="/project-tree" className="navbar-btn">
          PROJECT TREE
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
