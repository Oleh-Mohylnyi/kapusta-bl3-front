import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import * as serviceAPI from '../../services/serviceAPI'

export const register = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const result = await serviceAPI.register(user)
      const isSendEmailVerify = result.isSendEmailVerify
      if (isSendEmailVerify) {
        toast('Проверьте свой email')
      } else {
        toast('Еще раз пройдите регистрацию')
      }
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
      //   Notify.success(
      //     "Login successful!\n",
      //     `Welcome back, ${result.user.name}!`,
      //     3000
      //   );
      toast(`Вы успешно залогинились!`)
      return result
    } catch (error) {
      //   Notify.error('Incorrect email or password');
      toast('Выполните регистрацию')
      return rejectWithValue(error.message)
    }
  },
)

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await serviceAPI.logout()
      toast('Вы успешно разлогинились')
    } catch (error) {
      rejectWithValue(error.message)
    }
  },
)

export const currentUser = createAsyncThunk(
  'users/currentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) return rejectWithValue('Token Error');
   
    try {
      const result = await serviceAPI.currentUser(token);
     return result;
    } catch (error) {
      return  rejectWithValue(error.message);
    }
  },
);


export const userFromGoogleAuth = createAsyncThunk('/google-redirect',
  async (email, { rejectWithValue }) => {
    try {
      const data = await serviceAPI.getGoogleUser(email)
      console.log(`data in auth-operation`, data)
      return data
    } catch (error) {
      console.log(`error in auth-operation`, error)
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
