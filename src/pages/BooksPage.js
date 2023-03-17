import { useEffect } from "react";
import BookCard from "../components/bookApp/BookCard";
import BookCreate from "../components/bookApp/BookCreate";
import useBooksContext from "../components/bookApp/use-books-context";


function BooksPage() {
    const { fetchStableBooks, books } = useBooksContext();

    useEffect(() => {
        fetchStableBooks();
    }, [fetchStableBooks])

    const renderedBooks = books.map((e, i) => <BookCard key={e.id} book={e} />)
    return (
        <div className="BooksPage">
            Books App
            <BookCreate />
            <div className="list">
                {renderedBooks}
            </div>
        </div>
    );
}

export default BooksPage;
