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
            <div className="flex justify-between my-10">
                <span></span>
                <h1>Cars App</h1>
                <CarSearch />
            </div>
            <CarForm />
            <hr />
            <CarList />
            <CarValue />

            <div style={{ display: "flex", justifyContent: "center" }}>
            </div>
        </div>
    );
}

export default CarsApp;