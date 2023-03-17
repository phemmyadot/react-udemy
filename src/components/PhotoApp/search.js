import { useState } from "react";


function Search({ onSubmit }) {
    const [term, setTerm] = useState('');
    const click = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleSetTerm = (e) => {
        setTerm(e.target.value)
    }
    return <div style={{ padding: "30px 0" }}>
        <form onSubmit={click} >
            <input style={{ border: "1px solid green", padding: "10px" }} value={term} onChange={handleSetTerm} />
            <button style={{ background: "green", color: "white", cursor: "pointer", border: "none", padding: "10px" }} type="submit">search</button>
        </form>
    </div>
}

export default Search;
