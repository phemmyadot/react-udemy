import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store/carsStore";

function CarSearch() {
    const term = useSelector((state)=> state.carList.searchTerm);
    const dispatch = useDispatch();
    const handleChangeSearchTerm = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    }
    return (
        <form >
            <input style={{ border: "1px solid green", padding: "10px" }} value={term} onChange={handleChangeSearchTerm} />
        </form>
    );

}

export default CarSearch;