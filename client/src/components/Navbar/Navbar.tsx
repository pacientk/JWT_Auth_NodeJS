import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SvgBrandLogo } from '@/assets/svgSources';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from '@/components';

const navigation = [
   { name: 'Home', href: '/' },
   { name: `About${'\u00A0'}us`, href: '/aboutus' },
   { name: `Contact${'\u00A0'}us`, href: '/contactus' },
];

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function Navbar() {
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
                        {/* Mobile menu button*/}
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
                                    {item.name}
                                 </Link>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 sm:pr-0">
                        <LanguageSwitcher />
                     </div>
                  </div>

                  {/*   <button*/}
                  {/*      type="button"*/}
                  {/*      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">*/}
                  {/*      <span className="absolute -inset-1.5" />*/}
                  {/*      <span className="sr-only">View notifications</span>*/}
                  {/*      <BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                  {/*   </button>*/}

                  {/*   /!* Profile dropdown *!/*/}
                  {/*   <Menu as="div" className="relative ml-3">*/}
                  {/*      <div>*/}
                  {/*         <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">*/}
                  {/*            <span className="absolute -inset-1.5" />*/}
                  {/*            <span className="sr-only">Open user menu</span>*/}
                  {/*            <img*/}
                  {/*               className="h-8 w-8 rounded-full"*/}
                  {/*               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                  {/*               alt=""*/}
                  {/*            />*/}
                  {/*         </Menu.Button>*/}
                  {/*      </div>*/}
                  {/*      <Transition*/}
                  {/*         as={Fragment}*/}
                  {/*         enter="transition ease-out duration-100"*/}
                  {/*         enterFrom="transform opacity-0 scale-95"*/}
                  {/*         enterTo="transform opacity-100 scale-100"*/}
                  {/*         leave="transition ease-in duration-75"*/}
                  {/*         leaveFrom="transform opacity-100 scale-100"*/}
                  {/*         leaveTo="transform opacity-0 scale-95">*/}
                  {/*         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                  {/*            <Menu.Item>*/}
                  {/*               {({ active }) => (*/}
                  {/*                  <a*/}
                  {/*                     href="#"*/}
                  {/*                     className={classNames(*/}
                  {/*                        active ? 'bg-gray-100' : '',*/}
                  {/*                        'block px-4 py-2 text-sm text-gray-700',*/}
                  {/*                     )}>*/}
                  {/*                     Your Profile*/}
                  {/*                  </a>*/}
                  {/*               )}*/}
                  {/*            </Menu.Item>*/}
                  {/*            <Menu.Item>*/}
                  {/*               {({ active }) => (*/}
                  {/*                  <a*/}
                  {/*                     href="#"*/}
                  {/*                     className={classNames(*/}
                  {/*                        active ? 'bg-gray-100' : '',*/}
                  {/*                        'block px-4 py-2 text-sm text-gray-700',*/}
                  {/*                     )}>*/}
                  {/*                     Settings*/}
                  {/*                  </a>*/}
                  {/*               )}*/}
                  {/*            </Menu.Item>*/}
                  {/*            <Menu.Item>*/}
                  {/*               {({ active }) => (*/}
                  {/*                  <a*/}
                  {/*                     href="#"*/}
                  {/*                     className={classNames(*/}
                  {/*                        active ? 'bg-gray-100' : '',*/}
                  {/*                        'block px-4 py-2 text-sm text-gray-700',*/}
                  {/*                     )}>*/}
                  {/*                     Sign out*/}
                  {/*                  </a>*/}
                  {/*               )}*/}
                  {/*            </Menu.Item>*/}
                  {/*         </Menu.Items>*/}
                  {/*      </Transition>*/}
                  {/*   </Menu>*/}
                  {/*</div>*/}
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
                              {item.name}
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
