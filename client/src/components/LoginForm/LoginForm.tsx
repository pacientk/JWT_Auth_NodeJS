import React, { FC, useState } from 'react';
import { userLoginAction, userRegistrationAction } from '../../store/UserStore/UserActions';
import { useAppDispatch } from '../../store/hooks/redux';

const LoginForm: FC = () => {
   const dispatch = useAppDispatch();
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   return (
      <div>
         <form>
            <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
               </label>
               <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
               />
               <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
               </div>
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
               </label>
               <input
                  type="password"
                  className="form-control"
                  id="userPass"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
               />
            </div>
            {/*<div className="mb-3 form-check">*/}
            {/*   <input type="checkbox" className="form-check-input" id="exampleCheck1" />*/}
            {/*   <label className="form-check-label" htmlFor="exampleCheck1">*/}
            {/*      Check me out*/}
            {/*   </label>*/}
            {/*</div>*/}
            <div className={'row'}>
               <div className={'col-auto'}>
                  <button
                     type="button"
                     className="btn btn-primary"
                     onClick={() => dispatch(userLoginAction({ email, password }))}>
                     Login
                  </button>
               </div>
               <div className={'col-auto'}>
                  <button
                     type="button"
                     className="btn btn-primary"
                     onClick={() => dispatch(userRegistrationAction({ email, password }))}>
                     Registration
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default LoginForm;
