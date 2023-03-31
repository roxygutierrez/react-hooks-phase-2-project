import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Emoji</label>
      <input
        type="text"
        id="search"
        placeholder="🔍 Type here..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;