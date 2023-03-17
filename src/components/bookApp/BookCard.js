import { useState } from "react";
import Logo from "../logo";
import useBooksContext from "./use-books-context";

function BookCard({ book }) {
    const [term, setTerm] = useState(book.name);
    const [isEdit, setEditMode] = useState(false);
    const { handleDeleteBook, handleEditBook, } = useBooksContext();

    const editBook = (e) => {
        setTerm(e.target.value)
    }

    const deleteBook = (id) => {
        handleDeleteBook(id)
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await handleEditBook(book.id, term);
        setEditMode(false)
    }

    return (
        <div className="BookCard" style={{ textAlign: "center", border: '1px solid black', margin: '20px' }}>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <button onClick={() => setEditMode(!isEdit)} style={{ background: "blue", border: "none", color: "white", margin: '5px', padding: '5px 10px' }}>edit</button>
                <button onClick={() => deleteBook(book.id)} style={{ background: "red", border: "none", color: "white", margin: '5px', padding: '5px 10px' }}>delete</button>
            </div>
            <Logo width="150px" color="green" />
            <div style={{ margin: "10px 0", fontWeight: "500", padding: "0 20px" }}>
                {isEdit ?
                    <form onSubmit={handleSubmitForm} style={{ display: "flex", width: "-webkit-fill-available" }}>
                        <input onChange={editBook} value={term} style={{ width: "100%" }} />
                        <button type="submit" style={{ background: "orange", border: "none", color: "white", padding: '2px 10px' }}>edit</button>
                    </form> :
                    <span>{book.name}</span>}
            </div>
        </div>
    );
}

export default BookCard;
