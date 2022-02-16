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
        toast.success('Успешная регистрация! Проверьте свою почту!')
      } else {
        toast.warning('Пройдите регистрацию снова')
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
      toast.success('Вы успешно вошли в свой аккаунт!')
      return result
    } catch (error) {
      toast.warning('Ошибка! Проверьте свои учетные данные')
      return rejectWithValue(error.message)
    }
  },
)

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await serviceAPI.logout()
      toast.success('Вы вышли из своего аккаунта!')
    } catch (error) {
      toast.warning('Ошибка выхода из учетной записи')
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
      const result = await serviceAPI.getGoogleUser(token)
      toast.success('Успешная Google авторизация!')
      return result
    } catch (error) {
      toast.warning('Ошибка входа через Google аккаунт')
      return rejectWithValue(error.message)
    }
  },
)
