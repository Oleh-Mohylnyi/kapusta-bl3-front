import { createSlice } from '@reduxjs/toolkit';
import {register, login, logout, currentUser} from './operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isFetchingCurrentUser: false,
    error: null,
    isLoading: false,
    isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
    extraReducers: {

    [register.pending](state, action) {
        return {...state, isLoading: true,};
    },
    [register.fulfilled](state, action) {
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            isFetchingCurrentUser: false,
            isAuth: true,
            isLoading: false,
        };
    },
    [register.rejected](state, action) {
        return {...state, isLoading: false, error: action.payload};
    },
    
    [login.pending](state) {
        return {...state, isLoading: true,};
    },
    [login.fulfilled](state, action) {
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            isAuth: true,
            isLoading: false,
        };
    },
    [login.rejected](state, action) {
        return {...state, isLoading: false, error: action.payload};
    },
    
    [logout.pending](state) {
        return {...state, isLoading: true};
    },
    [logout.fulfilled](state) {
        return {
            ...state,
            user: { name: null, email: null },
            token: null,
            isLoading: false,
            isAuth: false,
        };
    },
    [logout.rejected](state, action) {
        return {...state, isLoading: false, error: action.payload};
    },

    [currentUser.pending](state) {
        return {...state, isLoading: true, isFetchingCurrentUser: true};
    },
    [currentUser.fulfilled](state, action) {
        return {
            ...state,
            user: action.payload,
            isFetchingCurrentUser: false,
            isLoading: false,
            isAuth: true,
        };
    },
    [currentUser.rejected](state, action) {
        return {
            ...state,
            isLoading: false,
            error: action.payload,
            isFetchingCurrentUser: false,
            isAuth: false,
        };
    },
  },
});

export default authSlice.reducer;