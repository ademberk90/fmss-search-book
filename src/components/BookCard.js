import React, { useState } from "react";
import noImage from "../assets/images/noImage.jpg";
import { useBook } from "../context/BookContext";

const BookCard = ({ book, setShowModal }) => {
  const { setModalBook } = useBook();
  console.log("bookcard");
  const imgUrl =
    book.volumeInfo?.imageLinks?.smallThumbnail ||
    book.volumeInfo?.imageLinks?.thumbnail;

  const handleClickDetail = () => {
    setModalBook(book);
    setShowModal(true);
  };
  return (
    <div className="book-box">
      <img src={imgUrl || noImage}></img>
      <div className="action-box">
        <a href={book.volumeInfo?.previewLink}>Preview</a>
        <a href="#" onClick={handleClickDetail}>
          Detail
        </a>
      </div>
    </div>
  );
};

export default BookCard;
