import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';

export const userLoginAction = createAsyncThunk(
   'userLoginAction',
   async (data: { email: string; password: string }, thunkAPI) => {
      try {
         const response = await AuthService.login(data.email, data.password);

         console.log('@@@@ response >>', response);

         localStorage.setItem('token', response.data.accesstoken);

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

         console.log('@@@@ response >>', response);

         localStorage.setItem('token', response.data.accesstoken);

         return response.data;
      } catch (e) {
         // @ts-ignore
         return thunkAPI.rejectWithValue(e.message);
      }
   },
);

export const userLogoutAction = createAsyncThunk(
   'userLogoutAction',
   async (data: { email: string; password: string }, thunkAPI) => {
      try {
         const response = await AuthService.logout();
         localStorage.removeItem('token');

         return response;
      } catch (e) {
         // @ts-ignore
         return thunkAPI.rejectWithValue(e.message);
      }
   },
);
