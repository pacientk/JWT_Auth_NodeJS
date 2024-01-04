import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../Models/IUser';
import { userLoginAction, userLogoutAction, userRegistrationAction } from './UserActions';

interface UserState {
   user: IUser;
   isAuth: boolean;
}

const initialState: UserState = {
   user: {} as IUser,
   isAuth: false,
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
         .addCase(userLoginAction.rejected, () => {
            console.error('userLoginAction rejected');
         })
         .addCase(userRegistrationAction.fulfilled, (state, action) => {
            console.info('userRegidtrationAction fulfilled');

            state.isAuth = true;
            state.user = action.payload.user;
         })
         .addCase(userRegistrationAction.rejected, () => {
            console.error('userRegidtrationAction rejected');
         })
         .addCase(userLogoutAction.fulfilled, (state, action) => {
            console.info('userLogoutAction fulfilled');

            state.isAuth = false;
            state.user = {} as IUser;
         })
         .addCase(userLogoutAction.rejected, () => {
            console.error('userRegidtrationAction rejected');
         });
   },
});

export const { setUser, setIsAuth } = userSlice.actions;

export default userSlice.reducer;
