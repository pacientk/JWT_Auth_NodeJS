import React, { useEffect, useState } from 'react';
import { LoginForm } from './components';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { userCheckAuthAction, userLogoutAction } from './store/UserStore/UserActions';
import { userSelector } from './store/selectors';
import UserService from './services/UserService';
import { IUser } from './Models/IUser';

function App() {
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
         <div>
            <LoginForm />
            <button onClick={getAllUsers}>GET USERS</button>
         </div>
      );
   }

   return (
      <div>
         <h1>{userStore.isAuth ? `user autorized ${userStore.user.email}` : 'LOGIN'}</h1>
         <div>
            <button onClick={() => dispatch(userLogoutAction())}>LOGOUT</button>
            <button onClick={() => getAllUsers()}>GET USERS</button>
         </div>
         {allUsers.map((item) => {
            return <div key={item.email}>{item.email}</div>;
         })}
      </div>
   );
}

export default App;
