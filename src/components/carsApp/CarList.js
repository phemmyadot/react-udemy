import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../../store/carsStore";

function CarList() {
    const dispatch = useDispatch();
    const { cars, carName } = useSelector(({ carList: { cars, searchTerm }, form: { name } }) => {
        const _filteredCars = cars.filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return {
            cars: _filteredCars,
            searchTerm,
            carName: name
        };
    });
    const handleRemoveCar = (id) => {
        dispatch(removeCar(id));
    }

    const matchesCar = (name) => {
        return carName && name.toLowerCase().includes(carName.toLowerCase());
    };
    const renderedCars = cars.map((e) =>
        <div key={e.id} style={{ display: "flex", margin: "auto", maxWidth: "300px", justifyContent: "space-between", alignItems: "center", border: "1px solid green", marginBottom: "10px", padding: "10px 20px", fontWeight: matchesCar(e.name) ? "bold" : "" }}>
            <p style={{ margin: "0" }}>{e.name || "N/A"}</p>
            <p style={{ margin: "0" }}>${e.cost || "0"}</p>
            <button onClick={() => handleRemoveCar(e.id)} style={{ background: "white", color: "red", cursor: "pointer", border: "none" }}>x</button>
        </div>)

    return (<div className="my-2">{renderedCars}</div>);

}

export default CarList;