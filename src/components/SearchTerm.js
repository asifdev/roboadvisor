import React from "react";

const SearchTerm = ({ term, searchRobots }) => {
  return (
    <div className="pa2 ma2">
      <input type="search" onChange={searchRobots} placeholder="Searching.." />
    </div>
  );
};

export default SearchTerm;
