import { useState } from "react";
import useBooksContext from "./use-books-context";

function BookCreate() {
    const { handleCreateBook } = useBooksContext();

    const [term, setTerm] = useState('');
    const handleSetTerm = (e) => {
        setTerm(e.target.value);
    }

    const onClick = (e) => {
        e.preventDefault();
        handleCreateBook(term)
        setTerm('')
    }

    return (
        <div className="BookCreate">
            <div style={{ padding: "30px 0" }}>
                <form onSubmit={onClick} >
                    <input style={{ border: "1px solid green", padding: "10px" }} value={term} onChange={handleSetTerm} />
                    <button style={{ background: "green", color: "white", cursor: "pointer", border: "none", padding: "10px" }} type="submit">create</button>
                </form>
            </div>
        </div>
    );
}

export default BookCreate;
