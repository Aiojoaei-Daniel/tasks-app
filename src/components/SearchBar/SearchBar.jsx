import React from "react";

import "./searchBar.css";

const SearchBar = ({ setSearchValue }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search-bar"
        className="search-input"
        placeholder="Search ..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
