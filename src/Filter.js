import React from "react";

const Filter = ({ Filter }) => {
  return (
    <div className="filter">
      <button className="filter__button" onClick={() => Filter("All")}>
        All
      </button>
      <button className="filter__button" onClick={() => Filter("breakfast")}>
        Breakfast
      </button>
      <button className="filter__button" onClick={() => Filter("lunch")}>
        Lunch
      </button>
      <button className="filter__button" onClick={() => Filter("shakes")}>
        Shakes
      </button>
    </div>
  );
};

export default Filter;
