import { createSlice } from '@reduxjs/toolkit';
import { register, login, currentUser, logout } from './operations';

const initialState = {
  user: { email: '' },
  token: '',
  error: null,
  isLoading: false,
  isAuth: false,
  isFetchCurrentUser: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      isAuth: true,
    }),
    [register.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [register.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),

    [login.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      isAuth: true,
      isAuthenticated: true,
    }),
    [login.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [login.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
      isAuthenticated: false,
    }),

    [currentUser.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload,
      isLoading: false,
      isAuth: true,
      isFetchCurrentUser: false,
    }),
    [currentUser.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
      isFetchCurrentUser: true,
    }),
    [currentUser.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
      isAuth: false,
      isFetchCurrentUser: false,
    }),

    [logout.fulfilled]: state => ({
      user: { name: '', email: '' },
      token: '',
      isLoading: false,
      isAuth: false,
    }),
    [logout.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [logout.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),
  },
});

export default authSlice.reducer;
