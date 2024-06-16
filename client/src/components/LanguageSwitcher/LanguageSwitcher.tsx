import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import React from 'react';

interface ILanguageSwitcherProps {
   // lng: 'en' | 'he' | 'ru';
}

const LanguageSwitcher: React.FC<ILanguageSwitcherProps> = () => {
   const { i18n } = useTranslation();
   const router = useRouter();
   const [dropdownIsActive, setDropdownIsActive] = React.useState(false);

   const changeLanguage = (lng: 'en' | 'he' | 'ru') => {
      if (lng !== i18n.language) {
         i18n.changeLanguage(lng);
         setDropdownIsActive(false);
         router.push(router.pathname, router.asPath, { locale: lng });
      }
   };

   return (
      <div>
         <div className="relative inline-block text-left">
            <div>
               <button
                  onClick={() => setDropdownIsActive((prevState) => !prevState)}
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true">
                  Options
                  <svg
                     className="-mr-1 h-5 w-5 text-gray-400"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     aria-hidden="true">
                     <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                     />
                  </svg>
               </button>
            </div>

            {/*<!--*/}
            {/*  Dropdown menu, show/hide based on menu state.*/}

            {/*  Entering: "transition ease-out duration-100"*/}
            {/*    From: "transform opacity-0 scale-95"*/}
            {/*    To: "transform opacity-100 scale-100"*/}
            {/*  Leaving: "transition ease-in duration-75"*/}
            {/*    From: "transform opacity-100 scale-100"*/}
            {/*    To: "transform opacity-0 scale-95"*/}
            {/*-->*/}
            <div
               className={`absolute ${
                  dropdownIsActive
                     ? 'transition ease-in duration-75'
                     : 'transform opacity-0 scale-95'
               } right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
               role="menu"
               aria-orientation="vertical"
               aria-labelledby="menu-button"
               tabIndex={-1}>
               <div className="py-1" role="none">
                  {/*-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->*/}
                  <div
                     className={
                        i18n.language === 'en' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                     }>
                     <button
                        onClick={() => changeLanguage('en')}
                        className={`block px-4 py-2 text-sm text-gray-700 `}
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0">
                        English
                     </button>
                  </div>
                  {/*<a*/}
                  {/*   href="#"*/}
                  {/*   className="block px-4 py-2 text-sm text-gray-700"*/}
                  {/*   role="menuitem"*/}
                  {/*   tabIndex={-1}*/}
                  {/*   id="menu-item-0">*/}
                  {/*   Account settings*/}
                  {/*</a>*/}
                  <div
                     className={
                        i18n.language === 'ru' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                     }>
                     <button
                        onClick={() => changeLanguage('ru')}
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1">
                        Russian
                     </button>
                  </div>
                  <form method="POST" action="#" role="none">
                     <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-3">
                        Sign out
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LanguageSwitcher;
