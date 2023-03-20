import { createSlice } from "@reduxjs/toolkit";
import { addUser, deleteUser, fetchUsers } from "../thunks/usersThunk";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        });

        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.data.push(action.payload);
            state.isLoading = false;
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        });
        
        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.data = state.data.filter((e) => e.id !== action.payload.id);
            state.isLoading = false;
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        });
    }
})

export const usersReducer = usersSlice.reducer;