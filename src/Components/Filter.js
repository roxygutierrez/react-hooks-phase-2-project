import React from "react";

const Filter = ({ onCategoryChange }) => {
  return (
    <div>
      <div className="Filter">
        <select
          name="filter"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Filter By Category...</option>
          <option value="Hearts">Hearts</option>
          <option value="People">People</option>
          <option value="Smiley Face">Smiley Face</option>
          <option value="Food">Food</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
