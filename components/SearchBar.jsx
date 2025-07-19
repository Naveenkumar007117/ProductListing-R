import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="🔍 Search products..."
        className="input"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;