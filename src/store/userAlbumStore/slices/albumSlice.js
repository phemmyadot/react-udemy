import { createSlice } from "@reduxjs/toolkit";
import { addAlbum } from "../apis/albumsApi";

const albumsSlice = createSlice({
    name: 'albums',
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    extraReducers(builder) {
        // builder.addCase(fetchUsers.pending, (state, action) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(fetchUsers.fulfilled, (state, action) => {
        //     state.data = action.payload;
        //     state.isLoading = false;
        // });
        // builder.addCase(fetchUsers.rejected, (state, action) => {
        //     state.error = action.error;
        //     state.isLoading = false;
        // });

        builder.addCase(addAlbum.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addAlbum.fulfilled, (state, action) => {
            state.data.push(action.payload);
            state.isLoading = false;
        });
        builder.addCase(addAlbum.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        });
        
        // builder.addCase(deleteUser.pending, (state, action) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(deleteUser.fulfilled, (state, action) => {
        //     state.data = state.data.filter((e) => e.id !== action.payload.id);
        //     state.isLoading = false;
        // });
        // builder.addCase(deleteUser.rejected, (state, action) => {
        //     state.error = action.error;
        //     state.isLoading = false;
        // });
    }
})

export const usersReducer = albumsSlice.reducer;