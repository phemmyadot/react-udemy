import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3001/users');
    return response.data;
});

const addUser = createAsyncThunk('users/add', async (user) => {
    const response = await axios.post('http://localhost:3001/users', user);
    return response.data;
});

const deleteUser = createAsyncThunk('users/delete', async ({id}) => {
    const response = await axios.delete(`http://localhost:3001/users/${id}`);
    return {...response.data,id};
});

export { fetchUsers, addUser, deleteUser };