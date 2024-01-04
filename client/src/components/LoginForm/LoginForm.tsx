import React, { FC, useState } from 'react';
import { userLoginAction, userRegistrationAction } from '../../store/UserStore/UserActions';
import { useAppDispatch } from '../../store/hooks/redux';

const LoginForm: FC = () => {
   const dispatch = useAppDispatch();
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   return (
      <div>
         <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder={'Email'}
            type={'text'}
         />
         <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder={'Password'}
            type={'password'}
         />

         <button onClick={() => dispatch(userLoginAction({ email, password }))}>Login</button>
         <button onClick={() => dispatch(userRegistrationAction({ email, password }))}>
            Registration
         </button>
      </div>
   );
};

export default LoginForm;
