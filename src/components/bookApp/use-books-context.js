import { useContext } from "react"
import BooksContext from "./bookContext"

const useBooksContext=() => {
    return useContext(BooksContext);
}

export default useBooksContext;