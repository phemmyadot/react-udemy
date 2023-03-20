import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../../store/carsStore";

function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector(({form: {cost, name}}) => {
        return { name: name, cost: cost }
    });

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(addCar({
            name, cost
        }));
    }

    const handleEditName = (e) => {
        dispatch(changeName(e.target.value));
    }

    const handleEditCost = (e) => {
        dispatch(changeCost(parseInt(e.target.value)));
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm} className="d-flex justify-center my-2">
                <input onChange={handleEditName} value={name} className="border border-green-800 rounded px-3 mr-2" placeholder="Enter car name" />
                <input onChange={handleEditCost} type="number" value={cost||''} className="border border-green-800 rounded px-2 mr-2" placeholder="Enter car cost" />
                <button type="submit" className="rounded p-2" style={{ background: "green", border: "none", color: "white" }}><GoPlus/></button>
            </form>
        </div>
    );

}

export default CarForm;