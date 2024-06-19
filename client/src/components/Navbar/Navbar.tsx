import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SvgBrandLogo } from '@/assets/svgSources';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from '@/components';
import { useTranslation } from 'next-i18next';

const navigation = [
   { name: 'home', href: '/' },
   { name: `aboutUs`, href: '/aboutus' },
   { name: `contactUs`, href: '/contactus' },
];

export default function Navbar() {
   const { t } = useTranslation('common');
   const [containerStyle, setContainerStyle] = useState({});
   const pathname = usePathname();

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setContainerStyle({
               // boxShadow: '50px 8px 32px 0 rgba( 132,37,173, 1 )',
               // borderBottom: '1px solid rgba( 255,255, 255, 0.18 )',
               backdropFilter: 'blur(16px)',
               backgroundColor: 'rgb(0, 0, 0, 0.5)',
            });
         } else {
            setContainerStyle({});
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <Disclosure
         as="nav"
         style={containerStyle}
         className={'sticky top-0 z-50 scroll-m-2d transition-colors duration-300 bg-transparent'}>
         {({ open }) => (
            <>
               <div className="mx-auto px-2 sm:px-6 lg:px-8">
                  <div className={`relative flex h-16 items-center justify-between`}>
                     <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        {/* MOBILE*/}
                        {/* MOBILE menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                           <span className="absolute -inset-0.5" />
                           <span className="sr-only">Open main menu</span>
                           {open ? (
                              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                           ) : (
                              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                           )}
                        </Disclosure.Button>
                     </div>

                     {/*DESKTOP*/}
                     <div className="flex flex-1 items-center justify-center sm:items-stretch lg:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                           <div className={'h-5 w-auto'}>
                              <Link href={'/'}>
                                 <SvgBrandLogo className={'h-6 fill-white lg:me-16'} />
                              </Link>
                           </div>
                        </div>
                        <div className="hidden lg:block">
                           <div className="flex space-x-6 py-1 mt-1">
                              {navigation.map((item) => (
                                 <Link
                                    key={item.name}
                                    href={item.href}
                                    className={
                                       pathname == item.href
                                          ? 'bg-white text-black font-normal leading-5 rounded-full px-3 py-1.5 text-sm'
                                          : 'text-white hover:bg-white hover:text-black font-light leading-5 rounded-full px-3 py-1.5 text-sm'
                                    }
                                    aria-current={pathname == item.href ? 'page' : undefined}>
                                    {t(`common:${item.name}`)}
                                 </Link>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 sm:pr-0">
                        <LanguageSwitcher />
                     </div>
                  </div>
               </div>

               {/*Mobile Drop nab bar*/}
               <Disclosure.Panel className="lg:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                     {navigation.map((item) => {
                        return (
                           <Link
                              key={item.name}
                              as="a"
                              href={item.href}
                              className={
                                 pathname == item.href
                                    ? 'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                              }
                              aria-current={pathname == item.href ? 'page' : undefined}>
                              {t(`item.name`)}
                           </Link>
                        );
                     })}
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   );
}
