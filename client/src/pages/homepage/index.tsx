import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SvgArrowRight } from '@/assets/svgSources';

interface User {
   _id: number;
   id: number;
   name: string;
   email: string;
   password: string;
}

const Homepage = () => {
   const apiUrl = process.env.API_URL || 'http://localhost:4000/api';
   const [users, setUsers] = useState<User[]>([]);
   const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
   const [updateUser, setUpdateUser] = useState({ id: '', name: '', email: '' });

   // Fetch users
   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      try {
         const response = await axios.get(`${apiUrl}/users`);
         setUsers(response.data.reverse());
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   // Delete a user
   const deleteUser = async (userId: number) => {
      try {
         await axios.delete(`${apiUrl}/users/${userId}`);
         setUsers(users.filter((user) => user._id !== userId));
      } catch (error) {
         console.error('Error deleting user:', error);
      }
   };

   // Create a user
   const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
         const response = await axios.post(`${apiUrl}/users/addnew`, newUser);
         setUsers([response.data, ...users]);
         setNewUser({ name: '', email: '', password: '' });
      } catch (error) {
         console.error('Error creating user:', error);
      }
   };

   // Update a user
   const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
         await axios.put(`${apiUrl}/users/${updateUser.id}`, {
            name: updateUser.name,
            email: updateUser.email,
         });
         setUpdateUser({ id: '', name: '', email: '' });
         setUsers(
            users.map((user) => {
               if (user.id === parseInt(updateUser.id)) {
                  return { ...user, name: updateUser.name, email: updateUser.email };
               }
               return user;
            }),
         );
      } catch (error) {
         console.error('Error updating user:', error);
      }
   };

   return (
      <div>
         <section className={'w-full max-w-6xl mx-auto mt-16 sm:mt-40 sm:mb-36'}>
            <h1
               className={
                  'my-16 pt-6 pb-0 px-2 lg:text-8xl md:text-7xl sm:text-7xl text-6xl tracking-tight text-white text-center font-semibold'
               }>
               We{'\u00A0'}are creating
               <br />
               sof{'\u200A'}tware solutions
            </h1>

            <div className="w-auto md:w-1/2 content-center m-auto flex">
               <h2 className={'text-white text-center text-lg font-light px-4'}>
                  Unleash your business potential with our innovative and reliable software
                  solutions that streamline workflow, boost productivity, and empower your success.
               </h2>
            </div>

            <div className={'flex columns-2 justify-between'}>
               <div className={'flex m-auto my-12'}>
                  <button
                     onClick={() => {}}
                     className={
                        'content-center max-h-14 flex text-lg items-center border-2 border-white text-white rounded-full pt-2.5 pb-2 px-4 group hover:bg-white hover:text-black hover:border-2'
                     }>
                     Contact us now
                     <SvgArrowRight className={'ms-3 h-4 fill-white group-hover:fill-black'} />
                  </button>
               </div>
            </div>
         </section>

         <section className={'w-full max-w-6xl mx-auto px-4'}>
            {/*Technologies*/}
            <div className={'mt-20 mb-5'}>
               <h1
                  className={
                     'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'
                  }>
                  Technologies
               </h1>

               <h2 className={'text-white text-center text-lg font-light'}>
                  Unleash your business potential with our innovative
               </h2>

               <div className={'grid grid-cols-1 sm:grid-cols-2 gap-x-16'}>
                  <div className={'my-10'}>
                     <h3 className={'text-3xl text-white font-light mb-3'}>Front End</h3>

                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        HTML5
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        SCSS
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        JavaScript
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        Bootstrap
                     </div>
                     <div className={'text-white font-light text-xl inline-block px-1'}>
                        and more
                     </div>
                     <h4 className={'text-lg text-white font-light mt-2'}>
                        Responsive websites for any kind of devices
                     </h4>
                  </div>

                  <div className={' my-10'}>
                     <h3 className={'text-3xl text-white font-light mb-3'}>Mobile</h3>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        React Native
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        Flutter
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        Android
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        iOS
                     </div>
                     <h4 className={'text-lg text-white font-light mt-2'}>
                        Cross-platform development for Android and iOS
                     </h4>
                  </div>

                  <div className={' my-10'}>
                     <h3 className={'text-3xl text-white font-light mb-3'}>Back End</h3>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        NodeJS
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        .NET
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        Umbraco
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        CMS
                     </div>
                     <div className={'text-white font-light text-xl inline-block px-1'}>
                        and many others
                     </div>
                     <h4 className={'text-lg text-white font-light mt-2'}>
                        Only the most reliable and optimal server solutions
                     </h4>
                  </div>

                  <div className={'my-10'}>
                     <h3 className={'text-3xl text-white font-light mb-3'}>Cloud technologies</h3>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        AWS
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        Azure
                     </div>
                     <div
                        className={
                           'bg-white text-backgr text-xl inline-block pt-0.5 px-1 my-1 me-3'
                        }>
                        GoogleCloud
                     </div>
                     <div className={'text-white font-light text-xl inline-block px-1'}>
                        and many others
                     </div>
                     <h4 className={'text-lg text-white font-light mt-2'}>
                        The most advanced cloud technologies for development
                     </h4>
                  </div>
               </div>
            </div>

            {/*SubTitile Section*/}
            <div className={'flex justify-center mt-5 mb-10'}>
               <h2 className={'w-2/3 justify-center text-lg font-light text-white text-center'}>
                  Unleash your business potential with our innovative and reliable software
                  solutions that streamline workflow, boost productivity, and empower your success.
               </h2>
            </div>
         </section>

         <section className={'w-full max-w-6xl mx-auto px-4 mb-48'}>
            <div className={'mt-32 mb-5'}>
               <h1
                  className={
                     'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'
                  }>
                  About us
               </h1>
            </div>

            <div className={'container columns-2 text-pretty gap-x-16 my-16'}>
               <p className={'text-sm leading-loose text-white font-extralight text-wrap'}>
                  Welcome to the world of innovation and software development with 0/1{'\u00A0'}
                  COMBINE{'\u00A0'}
                  {'\u2014'} your trusted partner in creating unique solutions! Our story began in
                  2015 and since then we have developed many exciting applications, software
                  solutions and websites for organizations of various sizes. Our experience spans
                  working with large corporations, startups, advertising and media agencies, private
                  entrepreneurs and others. What makes us special? Our team includes talented
                  developers, professional product managers, and experienced UI/UX specialists. We
                  have mastered the most advanced technologies, working with Windows, Linux, IOS,
                  Android, Ionic, Cordova and many other platforms. Our arsenal includes Back/Front
                  End, Client/Server Side, cloud technologies, data management, machine learning and
                  more. What makes us unique? We specialize in creating custom solutions that meet
                  each client's requirements and needs. We offer a full product development cycle
                  {'\u00A0'}
                  {'\u2014'} from ideation to implementation, and can effectively build into any
                  stage of development. This ability allows 0/1{'\u00A0'}COMBINE to provide
                  excellent service to every client, of any size and from any business sector, and
                  to integrate quickly into the activities required. Today, 0/1{'\u00A0'}COMBINE is
                  a dynamic company with over 8 years of successful operations. We are distinguished
                  by efficiency and responsiveness to any task. We are ready to provide superior
                  service to every client, regardless of size or area of business. We have a unique
                  ability to quickly integrate into any team and solve problems at the highest
                  level. Join 0/1{'\u00A0'}COMBINE and together we will turn your ideas into
                  reality! With us you will always be one step ahead of the competition.
               </p>
            </div>

            {/*SubTitile Section*/}
            <div className={'flex justify-center mt-5 mb-10'}>
               <h2 className={'w-2/3 justify-center text-lg font-light text-white text-center'}>
                  Join 0/1 COMBINE and together we will turn your ideas into reality!
                  <br />
                  With us you will always be one step ahead of the competition.
               </h2>
            </div>
         </section>

         <section className={'w-full max-w-6xl mx-auto px-4 mb-48'}>
            <div className={'mt-32 mb-5'}>
               <h1
                  className={
                     'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'
                  }>
                  Contact us
               </h1>
            </div>

            <div className={'grid grid-cols-1 sm:grid-cols-2 gap-x-16'}>
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
                              className="block w-full bg-gray-600 ring-1 ring-gray-500 rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
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
                              className="block w-full bg-gray-600 ring-1 ring-gray-500 rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
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
                              className="block w-full bg-gray-600 ring-1 ring-gray-500 rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
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
                              className="block w-full bg-gray-600 ring-1 ring-gray-500 rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
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
                              className="block w-full bg-gray-600 ring-1 ring-gray-500 rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6">
                              <option>Website quote</option>
                              <option>Mobile application quote</option>
                              <option>Customer service</option>
                           </select>
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
                              className="block w-full bg-gray-600 ring-1 ring-gray-500 rounded-md border-0 p-2.5 text-white placeholder:text-gray-400 sm:leading-6"
                              defaultValue={''}
                           />
                        </div>
                     </div>

                     <div className="col-span-full justify-end flex">
                        <button
                           onClick={() => {}}
                           className={
                              'content-center max-h-10 flex text-base items-center border-2 border-white text-white rounded-full pt-2.5 pb-2 px-4 group hover:bg-white hover:text-black hover:border-2'
                           }>
                           Send
                           <SvgArrowRight
                              className={'ms-3 h-4 fill-white group-hover:fill-black'}
                           />
                        </button>
                     </div>
                  </div>
               </div>

               <div className={'text-white'}>
                  <label
                     htmlFor="message"
                     className="block text-sm font-medium leading-6 text-white">
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
                     Email: contact@01combine.com
                  </div>
               </div>
            </div>
         </section>

         <section className={'w-full px-4 mt-48 bg-gray-400'}>
            <div className={'max-w-6xl mx-auto'}>
               <h1>FOOTER</h1>
            </div>
         </section>
      </div>
   );
};

export default Homepage;
