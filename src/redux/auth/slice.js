import { createSlice } from '@reduxjs/toolkit'
import { register, login, currentUser, logout, userFromGoogleAuth } from './operations'

const initialState = {
  user: { email: '', password: '' },
  token: '',
  error: null,
  isLoading: false,
  isAuth: false,
  isFetchCurrentUser: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user.email = action.payload.email
      state.isAuth = false
      state.isLoading = false
    },
    [register.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },

    [login.fulfilled]: (state, action) => {
      state.user.email = action.payload.email
      state.token = action.payload.token
      state.isAuth = true
      state.isLoading = false
    },
    [login.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload
      state.isAuth = false
      state.isLoading = false
    },

    [logout.fulfilled]: (state) => {
      state.user.email = null
      state.token = null
      state.isAuth = false
      state.isLoading = false
    },
    [logout.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [logout.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },

    [currentUser.fulfilled]: (state, action) => {
      state.user.email = action.payload.email
      state.isFetchCurrentUser = false
      state.isAuth = true
      state.isLoading = false
    },
    [currentUser.pending]: (state) => {
      state.isFetchCurrentUser = true
      state.isLoading = true
      state.error = null
    },
    [currentUser.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
      state.isAuth = false
      state.isFetchCurrentUser = false
    },

    [userFromGoogleAuth.fulfilled]: (state, action) => {
      state.user.email = action.payload.email
      // state.user.avatarURL = action.payload.user.avatarURL
      state.token = action.payload.token
      state.isLoading = false
      state.isAuth = true
    },
  },
})

export default authSlice.reducer