import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { SvgArrowRight, SvgBrandLogo } from '@/assets/svgSources';
import Image from 'next/image';

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

   const contentSections = {
      technologies: {
         title: 'Technologies',
         subTitle: 'Unleash your business potential with our innovative',
         sections: [
            {
               title: 'Front End',
               techNames: ['UI/UX design', 'Frameworks JS', 'HTML5', 'SCSS', 'JavaScript'],
               extText: 'and more',
               text: 'Responsive websites for any kind of devices',
               img: '/assets/images/thec_items_08_08.png',
            },
            {
               title: 'Mobile / Platforms',
               techNames: ['React', 'React Native', 'Electron', 'Flutter', 'Android', 'iOS'],
               extText: 'and many others',
               text: 'Cross-platform development for Android and iOS',
               img: '/assets/images/thec_items_03_03.png',
            },
            {
               title: 'Back End',
               techNames: ['NodeJS', 'MongoDB', 'PostgreSQL', 'Umbraco', 'Wordpress', 'CMS'],
               extText: '',
               text: 'Only the most reliable and optimal server solutions',
               img: '/assets/images/thec_items_01_01.png',
            },
            {
               title: 'Cloud technologies',
               techNames: ['AWS', 'Azure', 'GoogleCloud'],
               extText: 'and many others',
               text: 'The most advanced cloud technologies for development',
               img: '/assets/images/thec_items_10_10.png',
            },
            {
               title: 'Projects support',
               techNames: ['Jira', 'GitHub', 'Azure'],
               extText: 'and other',
               text: 'Comprehensive Project Support for Your Success',
               img: '/assets/images/thec_items_06_01.png',
            },
            {
               title: 'LLM / AI',
               techNames: ['ChatGPT', '', ''],
               extText: 'and many others',
               text: 'The most advanced cloud technologies for development',
               img: '/assets/images/thec_items_10_10.png',
            },
         ],
      },
   };

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
      <div
         className={
            'bg-contain bg-no-repeat bg-none sm:bg-[url(/assets/images/bg_img.webp)] sm:bg-[center_top_18rem] md:bg-[center_top_24rem] lg:bg-[center_top_18rem] xl:bg-[center_top_16rem]'
         }>
         <section className={'w-full max-w-6xl mx-auto mt-16 sm:mt-0 sm:mb-36'}>
            <h1
               className={
                  'mt-16 mb-12 pt-6 pb-0 px-2 lg:text-8xl md:text-7xl sm:text-7xl text-6xl tracking-tight text-white text-center font-semibold'
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

         <section
            className={
               'w-full mt-[150px] sm:mt-[300px] md:mt-[400px] lg:mt-[380px] xl:mt-[550px] max-w-6xl mx-auto px-4'
            }>
            {/*Technologies*/}
            <h1
               className={
                  'px-9 pt-6 pb-6 text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'
               }>
               {contentSections.technologies.title}
            </h1>

            <h2 className={'text-white text-center text-lg font-light'}>
               {contentSections.technologies.subTitle}
            </h2>

            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16'}>
               {contentSections.technologies.sections.map((item) => (
                  <div key={uuidv4()} className="mt-24 overflow-hidden text-center">
                     <Image
                        className={'mb-8 m-auto'}
                        src={item.img}
                        alt={item.extText}
                        width={144}
                        height={144}
                     />
                     <h3 className={'mb-6 text-3xl z-10 text-white font-semibold'}>{item.title}</h3>
                     {item.techNames.map((name, i) => (
                        <div
                           key={uuidv4()}
                           className={`bg-white text-backgr text-xl rounded-full font-semibold inline-block py-0.5 px-2.5 my-1 ${
                              item.techNames.length - 1 !== i ? 'me-3' : ''
                           }`}>
                           {name}
                        </div>
                     ))}
                     <div className={'text-white font-light text-xl inline-block px-1'}>
                        {item.extText}
                     </div>
                     <h4 className={'text-lg text-white font-light mt-2'}>{item.text}</h4>
                  </div>
               ))}
            </div>

            {/*SubTitile Section*/}
            <div className={'flex justify-center mt-16'}>
               <h2 className={'w-2/3 justify-center text-lg font-light text-white text-center'}>
                  Unleash your business potential with our innovative and reliable software
                  solutions that streamline workflow, boost productivity, and empower your success.
               </h2>
            </div>
         </section>

         {/*<section className={'w-full max-w-6xl mx-auto px-4 mb-48'}>*/}
         {/*   <div className={'mt-32 mb-5'}>*/}
         {/*      <h1*/}
         {/*         className={*/}
         {/*            'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'*/}
         {/*         }>*/}
         {/*         About us*/}
         {/*      </h1>*/}
         {/*   </div>*/}

         {/*   <div className={'container sm:columns-2 text-pretty gap-x-16 my-16'}>*/}
         {/*      <p className={'text-sm leading-loose text-white font-extralight text-wrap'}>*/}
         {/*         Welcome to the world of innovation and software development with 0/1{'\u00A0'}*/}
         {/*         COMBINE{'\u00A0'}*/}
         {/*         {'\u2014'} your trusted partner in creating unique solutions! Our story began in*/}
         {/*         2015 and since then we have developed many exciting applications, software*/}
         {/*         solutions and websites for organizations of various sizes. Our experience spans*/}
         {/*         working with large corporations, startups, advertising and media agencies, private*/}
         {/*         entrepreneurs and others. What makes us special? Our team includes talented*/}
         {/*         developers, professional product managers, and experienced UI/UX specialists. We*/}
         {/*         have mastered the most advanced technologies, working with Windows, Linux, IOS,*/}
         {/*         Android, Ionic, Cordova and many other platforms. Our arsenal includes Back/Front*/}
         {/*         End, Client/Server Side, cloud technologies, data management, machine learning and*/}
         {/*         more. What makes us unique? We specialize in creating custom solutions that meet*/}
         {/*         each client's requirements and needs. We offer a full product development cycle*/}
         {/*         {'\u00A0'}*/}
         {/*         {'\u2014'} from ideation to implementation, and can effectively build into any*/}
         {/*         stage of development. This ability allows 0/1{'\u00A0'}COMBINE to provide*/}
         {/*         excellent service to every client, of any size and from any business sector, and*/}
         {/*         to integrate quickly into the activities required. Today, 0/1{'\u00A0'}COMBINE is*/}
         {/*         a dynamic company with over 8 years of successful operations. We are distinguished*/}
         {/*         by efficiency and responsiveness to any task. We are ready to provide superior*/}
         {/*         service to every client, regardless of size or area of business. We have a unique*/}
         {/*         ability to quickly integrate into any team and solve problems at the highest*/}
         {/*         level. Join 0/1{'\u00A0'}COMBINE and together we will turn your ideas into*/}
         {/*         reality! With us you will always be one step ahead of the competition.*/}
         {/*      </p>*/}
         {/*   </div>*/}

         {/*   /!*SubTitile Section*!/*/}
         {/*   <div className={'flex justify-center mt-5 mb-10'}>*/}
         {/*      <h2 className={'w-2/3 justify-center text-lg font-light text-white text-center'}>*/}
         {/*         Join 0/1 COMBINE and together we will turn your ideas into reality!*/}
         {/*         <br />*/}
         {/*         With us you will always be one step ahead of the competition.*/}
         {/*      </h2>*/}
         {/*   </div>*/}
         {/*</section>*/}

         <section className={'max-w-6xl mx-auto px-4 mb-48'}>
            <div className={'mt-32 mb-5'}>
               <h1
                  className={
                     'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'
                  }>
                  Contact us
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

         <section
            style={{
               // boxShadow: '0 8px 32px 50px rgba( 132,37,173, 0.25 )',
               borderTop: '1px solid rgba( 255,255, 255, 0.18 )',
            }}
            className={'w-full mt-48 backdrop-blur-lg bg-black bg-opacity-60'}>
            <div className={'max-w-6xl mx-auto px-4 mb-48'}>
               <div className={'grid grid-cols-3 gap-x-0 p-20'}>
                  <div>
                     <Image
                        className={'m-auto'}
                        src={'/assets/images/thec_items_08_08.png'}
                        alt={'0/1 COMBINE — Footer > about us'}
                        width={144}
                        height={144}
                     />
                  </div>
                  <div>
                     <div className={'mb-6'}>
                        <SvgBrandLogo className={'h-6 fill-white me-5'} />
                     </div>
                     <div className={'text-white'}>
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
                  <div>
                     <div className={'text-white font-light text-sm'}>
                        At our company, we specialize in creating cutting-edge mobile and web
                        applications tailored to your unique business needs. Our expert development
                        team is dedicated to transforming your ideas into reality, ensuring
                        high-quality and innovative solutions. Partner with us to drive your digital
                        success and stay ahead in the competitive market.
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Homepage;
