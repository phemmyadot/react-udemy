import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carListSlice";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: "",
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload
        },
        changeCost(state, action) {
            state.cost = action.payload
        },
    },
    extraReducers(builder){
        builder.addCase(addCar, (state, action) => {
            return {
                name: "",
                cost: 0
            };
          });
        }
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;