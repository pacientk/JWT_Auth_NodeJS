import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import localesNames from '@/locales/localesNames';
import { Locale, LOCALES_LIST } from '@/utils/constants';

const LanguageSwitcher = () => {
   const { i18n } = useTranslation();
   const router = useRouter();
   const [dropdownIsActive, setDropdownIsActive] = React.useState(false);
   const [currentLang, setCurrentLang] = React.useState(i18n.language);
   const [langName, setLangName] = useState<string>(i18n.language);

   const changeLocale = (lang: Locale) => {
      if (i18n.language !== lang) {
         i18n.changeLanguage(lang);
         setCurrentLang(lang);
         setDropdownIsActive(false);
         router.push(router.pathname, router.asPath, { locale: lang });
      }
   };

   useEffect(() => {
      setLangName(localesNames[`${i18n.language}`]?.nativeName);
   }, [i18n.language]);

   return (
      <div className="relative mt-1">
         <button
            onClick={() => setDropdownIsActive((prevState) => !prevState)}
            onBlur={() => setDropdownIsActive((prevState) => !prevState)}
            type="button"
            className={
               'flex w-auto gap-x-2 px-2 py-1.5 font-light leading-5 rounded-full text-sm text-gray-100 hover:bg-white hover:text-black'
            }
            id="menu-button"
            aria-expanded="false"
            aria-haspopup="false">
            <Image
               className={'h-5 w-auto'}
               src={`/assets/images/language/${currentLang}.svg`}
               alt={'currentLang'}
               width={18}
               height={18}
            />
            {langName}
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
            } right-0 z-10 mt-2 min-w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}>
            <div className="py-1" role="none">
               {/*-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->*/}
               {LOCALES_LIST.map((lang) => (
                  <div
                     key={lang}
                     className={
                        i18n.language === lang
                           ? 'bg-gray-100 text-gray-900'
                           : 'text-gray-700  hover:bg-gray-200'
                     }>
                     <button
                        onClick={() => changeLocale(lang)}
                        className={`w-full px-4 py-2 text-sm text-gray-700`}
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0">
                        <div className="flex items-center min-w-0 gap-x-4">
                           <Image
                              className={'h-5 w-5 flex-none rounded-full bg-gray-50'}
                              src={`/assets/images/language/${lang}.svg`}
                              alt={'currentLang'}
                              width={18}
                              height={18}
                           />
                           <div className="min-w-0 flex-auto">
                              <p className="font-normal text-left leading-6 text-gray-900">
                                 {localesNames[lang]?.nativeName}
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
