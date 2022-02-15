import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import * as serviceAPI from '../../services/serviceAPI'

export const register = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const result = await serviceAPI.register(user)
      console.log(result);
      const isSendEmailVerify = result.isSendEmailVerify
      if (isSendEmailVerify) {
        toast('Success registration! Check your email')
      } else {
        toast('Register again')
      }
      console.log(result)
      console.log(isSendEmailVerify)
      return result
    } catch (error) {
      rejectWithValue(error.message)
    }
  },
)

export const login = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const result = await serviceAPI.login(user)
      toast('Successful login!')
      return result
    } catch (error) {
      toast.warning('Something went wrong! Check your credentials')
      return rejectWithValue(error.message)
    }
  },
)

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await serviceAPI.logout()
      toast('You are logged out of your account')
    } catch (error) {
      toast.warning('Something went wrong!')
      rejectWithValue(error.message)
    }
  },
)

export const currentUser = createAsyncThunk(
  'users/currentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const token = state.auth.token
    if (!token) return rejectWithValue('Token Error')

    try {
      const result = await serviceAPI.currentUser(token)
      return result
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const userFromGoogleAuth = createAsyncThunk(
  'users/google',
  async (token, { rejectWithValue }) => {
    try {
      await serviceAPI.getGoogleUser(token)
      toast('Successful Google Authorization!')
    } catch (error) {
      toast.warning('Google login error')
      return rejectWithValue(error.message)
    }
  },
)

// export const verification = createAsyncThunk(
//   'users/verification',
//   async (user, { rejectWithValue }) => {
//     try {
//       const result = await serviceAPI.verification(user);
//     //   Notify.success('You have successfully registered!');
//     toast('You have successfully verification!')
//       return result;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );
