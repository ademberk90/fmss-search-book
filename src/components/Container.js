import React from "react";
import axios from "axios";
import { useBook } from "../context/BookContext";
import { useFilter } from "../context/FilterContext";
import SearchBook from "./SearchBook";
import Books from "./Books";

const Container = () => {
  const { filterText } = useFilter();
  const { setBooks } = useBook();

  const handleSearchBooks = async () => {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        filterText
      )}`;
      const { data } = await axios.get(url);
      console.log(data);
      setBooks(data.items);
    } catch(e) {
      console.log(e);
    }
  };
  return (
    <>
      <SearchBook handleSearchBooks={handleSearchBooks} />
      <Books />
    </>
  );
};

export default Container;
