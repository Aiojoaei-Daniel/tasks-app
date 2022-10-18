import React from "react";

import "./sortBtns.css";

const SortBtns = () => {
  return (
    <div className="container">
      <div className="first-filter">
        <button>
          <i className="fas fa-arrows-alt-v"></i>
        </button>
        <select name="" id="">
          <option value="">Start date</option>
        </select>
        <button>
          <i className="fas fa-sort-amount-down-alt"></i>
        </button>
        <button>
          <i className="fas fa-sort-amount-up"></i>
        </button>
      </div>
      <div className="second-filter">
        <select name="" id="">
          <option value="">Show all</option>
        </select>
      </div>
      <div className="third-filter">
        <button>
          <i className="fas fa-sort-up"></i>
        </button>
        <button>
          <i className="fas fa-list"></i>
          List
        </button>
        <button>
          <i className="fas fa-sort"></i>
        </button>
        <button>
          <i className="fas fa-laptop-code"></i>Timeline
        </button>
      </div>
      <div className="fourth-filter">
        <button>
          <i className="fas fa-sitemap"></i> View project tree
        </button>
      </div>
    </div>
  );
};

export default SortBtns;
