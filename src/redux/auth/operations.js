import { createAsyncThunk } from '@reduxjs/toolkit'
// import { Notify } from '../../utils/notifications';
import { toast } from 'react-toastify'
import * as serviceAPI from '../../services/serviceAPI'

export const register = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const result = await serviceAPI.register(user)
      //   Notify.success('You have successfully registered!');
      const isSendEmailVerify = result.data.isSendEmailVerify
      if (isSendEmailVerify) {
        toast('Проверьте свой email')
      } else {
        console.log('Еще раз пройдите регистрацию');
        toast('Еще раз пройдите регистрацию')
      }
      return result
    } catch (error) {
      rejectWithValue(error.message)
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
      toast('Вы успешно залогинились')
      return result
    } catch (error) {
      //   Notify.error('Incorrect email or password');
      toast('Некорректный email or password')
      return rejectWithValue(error.message)
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

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await serviceAPI.logout()
      //   Notify.info('You have been logged out!');
      toast('Вы успешно разлогинились')
    } catch (error) {
      rejectWithValue(error.message)
    }
  },
)

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const register = createAsyncThunk(
//   'users/register',
//   async (user, { rejectWithValue }) => {
//     try {
//       const result = await axios.post('/users/signup', user);
//       token.set(result.data.token);
//       return result.data;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );

// export const login = createAsyncThunk(
//   'users/login',
//   async (user, { rejectWithValue }) => {
//     try {
//       const result = await axios.post('/users/login', user);
//       token.set(result.data.token);
//       return result.data;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );

// export const currentUser = createAsyncThunk(
//   'users/currentUser',
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     const token = state.auth.token;
//     if (!token) return rejectWithValue();
//     token.set(token);
//     try {
//       const result = await axios.get('/users/current');
//       return result;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );

// export const logout = createAsyncThunk(
//   'users/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.post('/users/logout');
//       token.unset();
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from 'react-toastify';

// const BASE_URL = `https://connections-api.herokuapp.com`;

// export const register = createAsyncThunk(
//     "auth/register",
//     async (user, { rejectWithValue }) => {
//         try {
//             const response = await fetch(`${BASE_URL}/users/signup`, {
//                 method: "POST",
//                 headers: {"Content-Type": "application/json",},
//                 body: JSON.stringify(user),
//             });
//             const data = await response.json();
//             toast(`Congratulations, you are registered!`);
//             return data;
//         } catch (err) {
//             rejectWithValue({ error: err.message });
//         }
//     }
// );
// export const login = createAsyncThunk(
//     "auth/login",
//     async (user, { rejectWithValue }) => {
//         try {
//             const response = await fetch(`${BASE_URL}/users/login`, {
//                 method: "POST",
//                 headers: {"Content-Type": "application/json",},
//                 body: JSON.stringify(user),
//             });
//             const data = await response.json();
//         return data;
//         } catch (err) {
//             rejectWithValue({ error: err.message });
//         }
//     }
// );
// export const logout = createAsyncThunk(
//     "auth/logout",
//     async (_, { rejectWithValue, getState }) => {
//         const state = getState();
//         const token = state.auth.token;
//         if (!token) return;
//         try {
//             await fetch(`${BASE_URL}/users/logout`, {
//                 method: "POST",
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//         } catch (err) {
//             rejectWithValue(err.message);
//         }
//     }
// );
// export const currentUser = createAsyncThunk(
//     "auth/currentUser",
//     async (_, { rejectWithValue, getState }) => {
//         const state = getState();
//         const token = state.auth.token;
//         if (!token) return;
//         try {
//             const response = await fetch(`${BASE_URL}/users/current`, {
//                 headers: {Authorization: `Bearer ${token}`,},
//             });
//             const data = await response.json();
//             return data;
//         } catch (err) {
//         rejectWithValue(err.message);
//     }
//   }
// );
