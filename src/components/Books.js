import React, { useState }  from "react";
import { useBook } from "../context/BookContext";
import BookCard from "./BookCard";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
};

const Books = () => {
  const [showModal, setShowModal] = useState(true);
  console.log("books");
  const { books, modalBook, setModalBook } = useBook();

  const handleCloseModal = () => {
    setShowModal(false);
    setModalBook(null);
  }
  return (
    <div className="books-box">
      {books &&
        books.map((item) => {
          return <BookCard book={item} setShowModal={setShowModal} />;
        })}
        
      {modalBook && <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={customStyles}
        contentLabel="Detail Modal"
      >
        <h2 className="modal-header">Detail</h2>
        <div className="detail-info-line">
          <h4>Adı:</h4>
          <span>{modalBook.volumeInfo?.title}</span>
        </div>
        <div className="detail-info-line">
          <h4>Yazar:</h4>
          <span>{modalBook.volumeInfo?.authors.join(', ')}</span>
        </div>
        <div className="detail-info-line">
          <h4>Sayfa Sayısı:</h4>
          <span>{modalBook.volumeInfo?.pageCount}</span>
        </div>
        <div className="detail-info-line">
          <h4>Yayın Tarihi:</h4>
          <span>{modalBook.volumeInfo?.publishedDate}</span>
        </div>
        <button className="modal-close-button" onClick={handleCloseModal}>Close</button>
      </Modal>}
    </div>
  );
};

export default React.memo(Books);
