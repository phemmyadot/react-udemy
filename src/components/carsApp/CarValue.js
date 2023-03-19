import { useSelector } from "react-redux";

function CarValue() {
    const cars = useSelector(({ carList:{cars, searchTerm} }) => {
        const filteredCars = cars.filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return filteredCars;
    });
    return <div><h3>Total Cost: ${cars.reduce((partialSum, a) => partialSum + a.cost, 0)}</h3></div>
}

export default CarValue;