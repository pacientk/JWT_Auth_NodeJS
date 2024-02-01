import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import '../src/assets/scss/bootstrap/bootstrap.scss';
import '../src/assets/scss/custom/custom.scss';

import { HomeScreen } from './screens';
import { NavBar } from './components';
import LoginScreen from './screens/LoginScreen';
import { store } from './store/store';

function App() {
   return (
      <Provider store={store}>
         <React.StrictMode>
            <BrowserRouter>
               <div className={'container-fluid g-0'}>
                  <NavBar />
                  <div className={'container'}>
                     <Routes>
                        <Route path="/">
                           <Route index element={<HomeScreen />} />
                           <Route path="/login" element={<LoginScreen />} />
                        </Route>
                     </Routes>
                  </div>
               </div>
            </BrowserRouter>
         </React.StrictMode>
      </Provider>
   );
}

export default App;
