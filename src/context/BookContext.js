import { useState, createContext, useContext } from "react";

const BookContext = createContext();

function BookProvider({ children }) {
    const [books, setBooks] = useState();
    const [modalBook, setModalBook] = useState(null);
    const values = {
        books,
        setBooks,
        modalBook,
        setModalBook
    }

    return (
        <BookContext.Provider value={values}>
            {children}
        </BookContext.Provider>
    )

}

const useBook = () => useContext(BookContext);

export { BookProvider, useBook }