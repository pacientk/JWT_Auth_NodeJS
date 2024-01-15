import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../Models/IUser';
import {
   userCheckAuthAction,
   userLoginAction,
   userLogoutAction,
   userRegistrationAction,
} from './UserActions';

interface UserState {
   user: IUser;
   isAuth: boolean;
   isLoading: boolean;
}

const initialState: UserState = {
   user: {} as IUser,
   isAuth: false,
   isLoading: false,
};

export const userSlice = createSlice({
   name: 'userSlice',
   initialState,
   reducers: {
      setUser: (state, action) => {
         state.user = action.payload;
      },
      setIsAuth: (state) => {
         state.isAuth = true;
      },
      setUserEmail: (state, action) => {
         state.user.email = action.payload;
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(userLoginAction.fulfilled, (state, action) => {
            console.info('userLoginAction fulfilled');
            state.isAuth = true;
            state.user = action.payload.user;
         })
         .addCase(userLoginAction.rejected, (state) => {
            console.error('userLoginAction rejected');
            state.isLoading = false;
         })
         .addCase(userRegistrationAction.fulfilled, (state, action) => {
            console.info('userRegistrationAction fulfilled');

            state.isAuth = true;
            state.user = action.payload.user;
         })
         .addCase(userRegistrationAction.rejected, () => {
            console.error('userRegistrationAction rejected');
         })
         .addCase(userLogoutAction.fulfilled, (state) => {
            console.info('userLogoutAction fulfilled');

            state.isAuth = false;
            state.user = {} as IUser;
         })
         .addCase(userLogoutAction.rejected, () => {
            console.error('userLogoutAction rejected');
         })
         .addCase(userCheckAuthAction.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(userCheckAuthAction.fulfilled, (state, action) => {
            console.info('userCheckAuthAction fulfilled');
            state.isLoading = false;
            state.isAuth = true;
            state.user = action.payload.user;
         })
         .addCase(userCheckAuthAction.rejected, (state) => {
            // console.error('userCheckAuthAction rejected');
            state.isLoading = false;
         });
   },
});

export const { setUser, setIsAuth } = userSlice.actions;

export default userSlice.reducer;
