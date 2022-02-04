import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const BASE_URL = `https://connections-api.herokuapp.com`;

export const register = createAsyncThunk(
    "auth/register",
    async (user, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/users/signup`, {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(user),
            });
            const data = await response.json();
            toast(`Congratulations, you are registered!`);
            return data;
        } catch (err) {
            rejectWithValue({ error: err.message });
        }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async (user, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(user),
            });
            const data = await response.json();
        return data;
        } catch (err) {
            rejectWithValue({ error: err.message });
        }
    }
);
export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const token = state.auth.token;
        if (!token) return;
        try {
            await fetch(`${BASE_URL}/users/logout`, {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
            });
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);
export const currentUser = createAsyncThunk(
    "auth/currentUser",
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const token = state.auth.token;
        if (!token) return;
        try {
            const response = await fetch(`${BASE_URL}/users/current`, {
                headers: {Authorization: `Bearer ${token}`,},
            });
            const data = await response.json();
            return data;
        } catch (err) {
        rejectWithValue(err.message);
    }
  }
);
