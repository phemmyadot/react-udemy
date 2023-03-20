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
            <input className="border border-green-800 rounded px-3 py-1 mr-2"  placeholder="Enter car name" value={term} onChange={handleChangeSearchTerm} />
        </form>
    );

}

export default CarSearch;