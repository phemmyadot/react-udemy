import { createContext, useCallback } from "react";
import { useState } from "react";
import { getBooks, createBook, editBook, deleteBook } from '../../core/api';



const BooksContext = createContext();

function Provider({ children }) {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const _books = await getBooks();
        _books.sort((a, b) => b.id - a.id)
        setBooks(_books);
    }

    const fetchStableBooks = useCallback(fetchBooks, []);

    const handleCreateBook = async (e) => {
        if (e.length > 3) {
            await createBook({ id: Math.max(books.map((e) => e.id)) + 1, name: e })
            await fetchStableBooks();
        }
    }

    const handleEditBook = async (id, name) => {
        const newBook = await editBook(id, { name })
        books.map((book) => {
            if (book.id === id)
                return { ...book, ...newBook }
            return book
        })
        await fetchStableBooks();
    }

    const handleDeleteBook = async (id) => {
        await deleteBook(id);
        await fetchStableBooks();
    }


    const valueToShare = {
        books,
        handleDeleteBook,
        handleEditBook,
        handleCreateBook,
        fetchStableBooks
    }


    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}


export { Provider };
export default BooksContext;