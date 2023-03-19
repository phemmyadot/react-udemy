import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, changeSearchTerm, addCar, removeCar } from "./slices/carListSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";


const store = configureStore({
    reducer: {
        carList: carsReducer,
        form: formReducer
    }
});

export { store, changeSearchTerm, addCar, removeCar, changeCost, changeName };