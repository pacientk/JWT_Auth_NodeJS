import React, { useEffect, useState } from 'react';
import { LoginForm } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { userSelector } from '../../store/selectors';
import { userCheckAuthAction, userLogoutAction } from '../../store/UserStore/UserActions';
import { IUser } from '../../Models/IUser';
import UserService from '../../services/UserService';

const LoginScreen = () => {
   const dispatch = useAppDispatch();
   const userStore = useAppSelector(userSelector);
   const [allUsers, setAllUsers] = useState<IUser[]>([]);

   useEffect(() => {
      if (localStorage.getItem('token')) {
         dispatch(userCheckAuthAction());
      }
   }, [dispatch]);

   const getAllUsers = async () => {
      try {
         const response = await UserService.fetchUsers();
         setAllUsers(response.data);
      } catch (e) {
         console.error('@@@@ getAllUsers err');
      }
   };

   if (!userStore.isAuth) {
      return userStore.isLoading ? (
         <div>'Loading...'</div>
      ) : (
         <>
            <div className={'container'}>
               <h1 className={'h4'}>{!userStore.isAuth && `Please fill out login form`}</h1>
               <LoginForm />
            </div>
         </>
      );
   }

   return (
      <div className={'container-fluid'}>
         <h1 className={'h1'}>
            {userStore.isAuth ? `User autorized ${userStore.user.email}` : 'LOGIN'}
         </h1>
         <div className={'row'}>
            <div className={'col'}>
               <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => dispatch(userLogoutAction())}>
                  LOGOUT
               </button>
            </div>
            <div className={'col'}>
               <button type="button" className="btn btn-primary" onClick={getAllUsers}>
                  Get users
               </button>
            </div>
         </div>

         {allUsers.map((item) => {
            return <div key={item.email}>{item.email}</div>;
         })}
      </div>
   );
};

export default LoginScreen;
