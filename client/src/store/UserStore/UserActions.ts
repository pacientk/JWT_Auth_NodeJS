import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';
import axios from 'axios';
import { API_URL } from '../../http';
import { IAuthResponse } from '../../Models/IAuthResponse';

export const userLoginAction = createAsyncThunk(
   'userLoginAction',
   async (data: { email: string; password: string }, thunkAPI) => {
      try {
         const response = await AuthService.login(data.email, data.password);
         localStorage.setItem('token', response.data.accessToken);

         return response.data;
      } catch (e) {
         // @ts-ignore
         return thunkAPI.rejectWithValue(e.message);
      }
   },
);

export const userRegistrationAction = createAsyncThunk(
   'userRegistrationAction',
   async (data: { email: string; password: string }, thunkAPI) => {
      try {
         const response = await AuthService.registration(data.email, data.password);
         localStorage.setItem('token', response.data.accessToken);

         return response.data;
      } catch (e) {
         // @ts-ignore
         return thunkAPI.rejectWithValue(e.message);
      }
   },
);

export const userLogoutAction = createAsyncThunk('userLogoutAction', async (_, thunkAPI) => {
   try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');

      return response;
   } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e.message);
   }
});

export const userCheckAuthAction = createAsyncThunk('userCheckAuthAction', async (_, thunkAPI) => {
   try {
      const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
         withCredentials: true,
      });
      localStorage.setItem('token', response.data.accessToken);

      return response.data;
   } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e.message);
   }
});
