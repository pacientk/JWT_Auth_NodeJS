import React, { useState } from 'react';
import { ButtonXL } from '@/components';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import axios from 'axios';

const Contactus = () => {
   const { t } = useTranslation();
   const [isFormVisible, setIsFormVisible] = useState(true);
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      category: '',
      customerId: '',
      message: '',
   });

   console.log('@@@@ formData:::', formData);
   const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

   const actionOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
         const response = await axios.post(`${apiUrl}/contactform`, formData);
         console.log('@@@@ response >>>>', response.data);

         if (response.status === 200) {
            setIsFormVisible(false);
         }
      } catch (error) {
         console.error('Error sending contact form:', error);
      }
   };

   return (
      <section className={'max-w-6xl mx-auto px-4 mb-48'}>
         <div className={'mt-32 mb-5'}>
            <h1
               className={
                  'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'
               }>
               {t('contactUs', { ns: 'contactus' })}
            </h1>
         </div>

         <div className={'grid grid-cols-1 md:grid-cols-2 gap-x-16'}>
            <div className={'text-white'}>
               <h1
                  className={`${
                     isFormVisible ? 'hidden' : 'block'
                  } px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold`}>
                  Thank you for contacting us!
               </h1>
               <form
                  className={`${
                     isFormVisible ? 'block' : 'hidden'
                  } grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-4`}
                  onSubmit={actionOnSubmit}
                  method="POST">
                  <div className="sm:col-span-2">
                     <label
                        htmlFor="firstName"
                        className="block text-sm font-medium leading-6 text-white">
                        First name
                     </label>
                     <div className="mt-2">
                        <input
                           onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                           onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
                           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                        htmlFor="category"
                        className="block text-sm font-medium leading-6 text-white">
                        Request subject
                     </label>
                     <div className="mt-2">
                        <select
                           onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                           id="category"
                           name="category"
                           autoComplete="category-name"
                           className="block w-full bg-gray-600 bg-opacity-30 ring-1 ring-white rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6">
                           <option>Website quote</option>
                           <option>Mobile application quote</option>
                           <option>Customer service</option>
                        </select>
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label
                        htmlFor="customerId"
                        className="block text-sm font-medium leading-6 text-white">
                        Customer ID:
                     </label>
                     <div className="mt-2">
                        <input
                           onChange={(e) =>
                              setFormData({ ...formData, customerId: e.target.value })
                           }
                           id="customerId"
                           name="customerId"
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
                           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                           id="message"
                           name="message"
                           rows={3}
                           className="block w-full bg-gray-600 bg-opacity-30 ring-1 ring-white rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
                           defaultValue={''}
                        />
                     </div>
                  </div>

                  <div className="col-span-full justify-end flex">
                     <div className={'flex columns-2 justify-between'}>
                        <ButtonXL
                           type={'submit'}
                           containerStyle={'my-4'}
                           content={t('btn_ContactUsNow')}
                           // routeName={'/addContactUsForm'}
                        />
                     </div>
                  </div>
               </form>
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
                  {/*<br />*/}
                  {/*Tel: 052-8287009*/}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
   return {
      props: {
         ...(await serverSideTranslations(locale || 'en', ['common', 'contactus'])),
      },
   };
};

export default Contactus;
