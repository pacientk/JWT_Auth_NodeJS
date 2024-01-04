import React from 'react';
import { setUser } from './store/UserStore/UserSclice';
import { LoginForm } from './components';
import { useAppDispatch } from './store/hooks/redux';

function App() {
   const dispatch = useAppDispatch();

   return (
      <div>
         <LoginForm />
         <div>
            <button onClick={() => dispatch(setUser({ name: 'kir' }))}>TEST</button>
         </div>
      </div>
   );
}

export default App;
