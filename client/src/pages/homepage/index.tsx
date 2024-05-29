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
         <div className={'w-full max-w-6xl mx-auto'}>
            <div className={'my-10 md:my-20 justify-center'}>
               <h1
                  className={
                     'my-16 pt-6 pb-6 lg:text-8xl md:text-7xl sm:text-7xl text-6xl tracking-tight text-white text-center md:text-start font-semibold nline-block'
                     // 'sm:mx-20 mx-10 my-16 px-9 pt-6 pb-6 rounded bg-white lg:text-8xl md:text-7xl sm:text-7xl text-6xl tracking-tight text-backgr text-center md:text-start font-semibold nline-block'
                  }>
                  We are creating
                  <br />
                  sof{'\u200A'}tware solutions
               </h1>

               <div className={'flex columns-2 justify-start'}>
                  <h2
                     className={
                        'leading-relaxed text-lg max-w-lg pt-3 sm:mx-20 mx-10 font-light text-white'
                     }>
                     Unleash your business potential with our innovative and reliable software
                     solutions that streamline workflow, boost productivity, and empower your
                     success.
                  </h2>

                  <div className={'flex-1 content-center'}>
                     <button
                        onClick={() => {}}
                        className={
                           'content-center max-h-14 flex text-lg items-center border-2 border-white text-white rounded pt-2.5 pb-2 px-4 group hover:bg-white hover:text-black hover:border-2'
                        }>
                        Contact us now
                        <SvgArrowRight className={'ms-3 h-4 fill-white group-hover:fill-black'} />
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className={'w-full max-w-5xl mx-auto '}>
            {/*Technologies*/}
            <div className={'mt-20 mb-5'}>
               <h1
                  className={
                     'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-bold'
                  }>
                  Technologies
               </h1>

               <h2 className={'text-lg font-light text-white text-center'}>
                  Unleash your business potential with our innovative
               </h2>

               <div className={'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
                  <div className={' my-10'}>
                     <h3 className={'text-3xl text-white font-light mb-3'}>Front End</h3>

                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        HTML5
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        SCSS
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        JavaScript
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
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
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        React Native
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        Flutter
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        Android
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        iOS
                     </div>
                     <h4 className={'text-lg text-white font-light mt-2'}>
                        Cross-platform development for Android and iOS
                     </h4>
                  </div>

                  <div className={' my-10'}>
                     <h3 className={'text-3xl text-white font-light mb-3'}>Back End</h3>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        NodeJS
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        .NET
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        Umbraco
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
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
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        AWS
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
                        Azure
                     </div>
                     <div className={'bg-white text-backgr text-xl inline-block px-1 my-1 me-3'}>
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

            <div className={'mt-20 mb-5'}>
               <h1
                  className={
                     'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-bold'
                  }>
                  About us
               </h1>
            </div>

            <div className={'container columns-2 text-pretty gap-10'}>
               <p className={'text-md text-white font-extralight text-wrap'}>
                  Welcome to the world of innovation and software development with 0/1 COMBINE —
                  your trusted partner in creating unique solutions! Our story began in 2015 and
                  since then we have developed many exciting applications, software solutions and
                  websites for organizations of various sizes. Our experience spans working with
                  large corporations, startups, advertising and media agencies, private
                  entrepreneurs and others. What makes us special? Our team includes talented
                  developers, professional product managers, and experienced UI/UX specialists. We
                  have mastered the most advanced technologies, working with Windows, Linux, IOS,
                  Android, Ionic, Cordova and many other platforms. Our arsenal includes Back/Front
                  End, Client/Server Side, cloud technologies, data management, machine learning and
                  more. What makes us unique? We specialize in creating custom solutions that meet
                  each client's requirements and needs. We offer a full product development cycle -
                  from ideation to implementation, and can effectively build into any stage of
                  development. This ability allows 0/1 COMBINE to provide excellent service to every
                  client, of any size and from any business sector, and to integrate quickly into
                  the activities required. Today, 0/1 COMBINE is a dynamic company with over 8 years
                  of successful operations. We are distinguished by efficiency and responsiveness to
                  any task. We are ready to provide superior service to every client, regardless of
                  size or area of business. We have a unique ability to quickly integrate into any
                  team and solve problems at the highest level. Join 0/1 COMBINE and together we
                  will turn your ideas into reality! With us you will always be one step ahead of
                  the competition.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Homepage;
