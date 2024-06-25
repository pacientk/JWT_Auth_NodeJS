import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Index = () => {
   return (
      <>
         {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
         <div className={'flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'}>
            <div className={'sm:mx-auto sm:w-full sm:max-w-sm text-center'}>
               <div>
                  <Image
                     className={'h-4 w-auto'}
                     src={'/assets/images/01combine_logo.svg'}
                     alt={'0/1 COMBINE'}
                     width={187}
                     height={20}
                  />
               </div>
               <h2
                  className={
                     'mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'
                  }>
                  Registration or{'\u00A0'}
                  <Link className={'text-blue-500'} href={'/login'}>
                     Sign in
                  </Link>
               </h2>
            </div>

            <div className={'mt-10 sm:mx-auto sm:w-full sm:max-w-sm'}>
               <form className={'space-y-6" action="#" method="POST'}>
                  <div>
                     <label
                        htmlFor="firstName"
                        className={'block text-sm font-medium leading-6 text-gray-900'}>
                        First Name
                     </label>
                     <div className={'mt-2'}>
                        <input
                           id="firstName"
                           name="firstName"
                           type="text"
                           autoComplete="firstName"
                           required
                           className={
                              'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                           }
                        />
                     </div>
                  </div>

                  <div>
                     <label
                        htmlFor="secondName"
                        className={'block text-sm font-medium leading-6 text-gray-900'}>
                        Second Name
                     </label>
                     <div className={'mt-2'}>
                        <input
                           id="secondName"
                           name="secondName"
                           type="text"
                           autoComplete="secondName"
                           required
                           className={
                              'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                           }
                        />
                     </div>
                  </div>

                  <div>
                     <label
                        htmlFor="email"
                        className={'block text-sm font-medium leading-6 text-gray-900'}>
                        Email address
                     </label>
                     <div className={'mt-2'}>
                        <input
                           id="email"
                           name="email"
                           type="email"
                           autoComplete="email"
                           required
                           className={
                              'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                           }
                        />
                     </div>
                  </div>

                  <div>
                     <div className={'flex items-center justify-between'}>
                        <label
                           htmlFor="password"
                           className={'block text-sm font-medium leading-6 text-gray-900'}>
                           Password
                        </label>
                     </div>
                     <div className={'mt-2'}>
                        <input
                           id="password"
                           name="password"
                           type="password"
                           autoComplete="current-password"
                           required
                           className={
                              'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                           }
                        />
                     </div>
                  </div>

                  <div>
                     <div className={'flex items-center justify-between'}>
                        <label
                           htmlFor="password2"
                           className={'block text-sm font-medium leading-6 text-gray-900'}>
                           Repeat Password
                        </label>
                     </div>
                     <div className={'mt-2'}>
                        <input
                           id="password2"
                           name="password2"
                           type="password2"
                           autoComplete="current-password"
                           required
                           className={
                              'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                           }
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className={
                           'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        }>
                        Sign up
                     </button>
                  </div>
               </form>

               <p className={'mt-10 text-center text-sm text-gray-500'}>
                  Not a member?{' '}
                  <Link
                     href="#"
                     className={'font-semibold leading-6 text-indigo-600 hover:text-indigo-500'}>
                     Start a 14 day free trial
                  </Link>
               </p>
            </div>
         </div>
      </>
   );
};

export default Index;
