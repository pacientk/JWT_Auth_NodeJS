import React from 'react';
import { ButtonXL } from '@/components';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
   return {
      props: {
         ...(await serverSideTranslations(locale || 'en', ['common', 'contactus'])),
      },
   };
};

const Contactus = () => {
   const { t } = useTranslation('contactus');
   return (
      <section className={'max-w-6xl mx-auto px-4 mb-48'}>
         <div className={'mt-32 mb-5'}>
            <h1
               className={
                  'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'
               }>
               {t('contactUs')}
            </h1>
         </div>

         <div className={'grid grid-cols-1 md:grid-cols-2 gap-x-16'}>
            <div className={'text-white'}>
               <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-4">
                  <div className="sm:col-span-2">
                     <label
                        htmlFor="firstName"
                        className="block text-sm font-medium leading-6 text-white">
                        First name
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="firstName"
                           id="firstName"
                           autoComplete="given-name"
                           className="block w-full bg-gray-600 bg-opacity-30 ring-1 ring-white rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label
                        htmlFor="lastName"
                        className="block text-sm font-medium leading-6 text-white">
                        Last name
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="lastName"
                           id="lastName"
                           autoComplete="family-name"
                           className="block w-full bg-gray-600 bg-opacity-30 ring-1 ring-white rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-white">
                        Email address
                     </label>
                     <div className="mt-2">
                        <input
                           id="email"
                           name="email"
                           type="email"
                           autoComplete="email"
                           className="block w-full bg-gray-600 bg-opacity-30 ring-1 ring-white rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-white">
                        Phone number
                     </label>
                     <div className="mt-2">
                        <input
                           id="phone"
                           name="phone"
                           type="tel"
                           autoComplete="phone"
                           className="block w-full bg-gray-600 bg-opacity-30 ring-1 ring-white rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="col-span-full">
                     <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-white">
                        Request subject
                     </label>
                     <div className="mt-2">
                        <select
                           id="country"
                           name="country"
                           autoComplete="country-name"
                           className="block w-full bg-gray-600 bg-opacity-30 ring-1 ring-white rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6">
                           <option>Website quote</option>
                           <option>Mobile application quote</option>
                           <option>Customer service</option>
                        </select>
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label
                        htmlFor="userID"
                        className="block text-sm font-medium leading-6 text-white">
                        Customer ID:
                     </label>
                     <div className="mt-2">
                        <input
                           id="userID"
                           name="userID"
                           type="number"
                           autoComplete="ID"
                           className="block w-full bg-gray-600 bg-opacity-30 ring-1 ring-white rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="col-span-full">
                     <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-6 text-white">
                        Message
                     </label>
                     <div className="mt-2">
                        <textarea
                           id="message"
                           name="message"
                           rows={3}
                           className="block w-full bg-gray-600 bg-opacity-30 ring-1 ring-white rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
                           defaultValue={''}
                        />
                     </div>
                  </div>

                  <div className="col-span-full justify-end flex">
                     <ButtonXL
                        content={'Send'}
                        routeName={'/contactus'}
                        containerStyle={'m-0 my-4'}
                     />
                  </div>
               </div>
            </div>

            <div className={'text-white'}>
               <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
                  Our location
               </label>
               <div
                  className={
                     'mt-2 w-full h-56 bg-[url("/assets/images/map.jpg")] bg-center overflow-hidden mb-10 bg-gray-600 ring-1 ring-gray-500 rounded-md border-0'
                  }
               />
               <div>
                  Migdal Sonol
                  <br />
                  52 Menachem Begin,
                  <br />
                  Tel Aviv, 67137
                  <br />
                  <br />
                  Tel: 052-8287009
                  <br />
                  Email:{' '}
                  <a
                     className={'underline underline-offset-2'}
                     href={'mailto:contactus@01combine.com'}>
                     contactus@01combine.com
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contactus;
