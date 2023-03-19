import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'carList',
    initialState: {
        searchTerm: "",
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            state.cars.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost,
            })
        },
        removeCar(state, action) {
            state.cars = state.cars.filter((e) => e.id !== action.payload)
        },
    }
});

export const { addCar, changeSearchTerm, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;