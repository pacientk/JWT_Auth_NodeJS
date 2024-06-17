import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

// interface ILanguageSwitcherProps {
//    lng: 'en' | 'he' | 'ru';
// }

const LanguageSwitcher = () => {
   const { i18n } = useTranslation();
   const router = useRouter();
   const [dropdownIsActive, setDropdownIsActive] = React.useState(false);
   const [currentLang, setCurrentLang] = React.useState(i18n.language);

   const changeLanguage = (lng: 'en' | 'he' | 'ru') => {
      if (lng !== i18n.language) {
         i18n.changeLanguage(lng);
         setCurrentLang(lng);
         setDropdownIsActive(false);
         router.push(router.pathname, router.asPath, { locale: lng });
      }
   };

   return (
      <div className="relative inline-block text-left">
         <button
            onClick={() => setDropdownIsActive((prevState) => !prevState)}
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true">
            <Image
               className={'h-4 w-auto'}
               src={`/assets/images/language/${currentLang}.svg`}
               alt={'currentLang'}
               width={18}
               height={18}
            />
            {i18n.language}
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
               dropdownIsActive ? 'transition ease-in duration-75' : 'transform opacity-0 scale-95'
            } right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}>
            <div className="py-1" role="none">
               {/*-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->*/}
               {/*TODO: create LocaleContext as Sparks*/}
               {[...new Array('en', 'he', 'ru')].map((item: any, i: number) => (
                  <div
                     key={item}
                     className={
                        i18n.language === item
                           ? 'bg-gray-100 text-gray-900'
                           : 'text-gray-700  hover:bg-gray-200'
                     }>
                     <button
                        onClick={() => changeLanguage(item)}
                        className={`w-full px-4 py-2 text-sm text-gray-700`}
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0">
                        <div className="flex  items-center min-w-0 gap-x-4">
                           <Image
                              className={'h-5 w-5 flex-none rounded-full bg-gray-50'}
                              src={`/assets/images/language/${item}.svg`}
                              alt={'currentLang'}
                              width={18}
                              height={18}
                           />
                           <div className="min-w-0 flex-auto">
                              <p className="font-normal text-left leading-6 text-gray-900">
                                 {item === 'en'
                                    ? 'English'
                                    : item === 'ru'
                                      ? 'Russian'
                                      : item === 'he'
                                        ? 'Hebrew'
                                        : ''}
                              </p>
                           </div>
                        </div>
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default LanguageSwitcher;
