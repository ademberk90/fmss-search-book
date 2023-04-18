import React from "react";
import { useFilter } from "../context/FilterContext";


const SearchBook = ({ handleSearchBooks }) => {
  const { filterText, setFilterText } = useFilter();

  console.log("SearchBook");
  return (
    <div className="search-book-box">
      <h1>Book Search using React</h1>
      <div className="filter-box">
        <input
          placeholder="Book Title..."
          onChange={(e) => setFilterText(e.target.value)}
        ></input>
        <button onClick={handleSearchBooks}>
          <svg width="24px" height="24px" viewBox="0 0 20 20" fill="none">
            <path
              fill="#000000"
              fill-rule="evenodd"
              d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
            />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default SearchBook;
