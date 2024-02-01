import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
   return (
      <nav className={'navbar ss-navbar navbar-expand-lg sticky-top'}>
         <div className="d-flex w-100">
            <div className="container-fluid">
               <div className="row align-items-center justify-content-between">
                  <div className="col-md-auto col-lg g-0">
                     <NavLink to="/">
                        <img
                           src={'/assets/images/01combine_logo.svg'}
                           alt={'0/1 COMBINE'}
                           width={186}
                           height={20}
                        />
                     </NavLink>
                  </div>

                  <div className="col">
                     <div className="navbar-nav justify-content-start justify-content-xl-center">
                        <ul className="navbar-nav">
                           <li className="nav-item">
                              <NavLink
                                 className={'nav-link'}
                                 style={({ isActive }) => ({
                                    backgroundColor: isActive ? 'red' : '',
                                 })}
                                 to={'/login'}>
                                 Login
                              </NavLink>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#">
                                 Features
                              </a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#">
                                 Pricing
                              </a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link disabled" aria-disabled="true">
                                 Disabled
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col g-0 d-flex align-items-center justify-content-end">
                     {/*<LangSwitcher dropdownToEnd={isAuth && !isRTL} />*/}
                     <button className={'btn btn-primary'} onClick={() => console.log('@@@@ LANG')}>
                        Lang
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
