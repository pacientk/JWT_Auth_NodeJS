import React, { useEffect, useState } from 'react';
import '../src/assets/scss/bootstrap/bootstrap.scss';
import '../src/assets/scss/custom/custom.scss';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { userCheckAuthAction, userLogoutAction } from './store/UserStore/UserActions';
import { userSelector } from './store/selectors';
import UserService from './services/UserService';
import { IUser } from './Models/IUser';
import { HomeScreen } from './screens';
import { NavBar } from './components';

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

   // if (!userStore.isAuth) {
   //    return userStore.isLoading ? (
   //       <div>'Loading...'</div>
   //    ) : (
   //       <>
   //          <nav className="navbar bg-body-tertiary">
   //             <div className="container-fluid">
   //                <div className="container">
   //                   <a className="navbar-brand" href="#">
   //                      Navbar
   //                   </a>
   //                </div>
   //             </div>
   //          </nav>
   //          <div className={'container-lg'}>
   //             <h1 className={'h4'}>{!userStore.isAuth && `Please fill out login form`}</h1>
   //
   //             <LoginForm />
   //             <button onClick={getAllUsers}>GET USERS</button>
   //          </div>
   //       </>
   //    );
   // }

   return (
      <div className={'container-fluid'}>
         <NavBar />
         <HomeScreen />
         <h1 className={'h1'}>
            {userStore.isAuth ? `User autorized ${userStore.user.email}` : 'LOGIN'}
         </h1>
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
