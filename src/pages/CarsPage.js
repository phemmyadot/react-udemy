import { Provider } from "react-redux";
import CarForm from "../components/carsApp/CarForm";
import CarList from "../components/carsApp/CarList";
import CarSearch from "../components/carsApp/CarSearch";
import CarValue from "../components/carsApp/CarValue";
import { store } from "../store/carsStore";

function CarsApp() {
    return (
        <Provider store={store}><CarsPage /></Provider>
    );
}

const CarsPage = () => {
    return (
        <div className="PlaylistApp">
            <h1>Cars App</h1>
            <CarForm />
            <hr />
            <CarList />
            <CarSearch />
            <CarValue />

            <div style={{ display: "flex", justifyContent: "center" }}>
            </div>
        </div>
    );
}

export default CarsApp;