import React from "react";

const Filter = ({ Filter, categ }) => {
  console.log(categ);
  return (
    <div className="filter">
      {categ.map((data) => {
        return (
          <button className="filter__button" onClick={() => Filter(data)}>
            {data}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
