import { CardComponent } from '@/components';
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
      <div className={'w-full max-w-7xl'}>
         <div className={'my-10 md:my-20 justify-center'}>
            <h1
               className={
                  'sm:mx-20 mx-10 my-16 px-9 pt-6 pb-6 rounded bg-white lg:text-8xl md:text-7xl sm:text-7xl text-6xl tracking-tight text-backgr text-center md:text-start font-noto italic font-bold inline-block'
               }>
               We are creating
               <br />
               sof{'\u200A'}tware solutions
            </h1>

            <h2
               className={
                  'leading-relaxed text-lg max-w-lg pt-3 sm:mx-20 mx-10 font-noto font-light text-white'
               }>
               Unleash your business potential with our innovative and reliable software solutions
               that streamline workflow, boost productivity, and empower your success.
            </h2>

            <button
               onClick={() => {}}
               className={
                  'sm:mx-20 mx-10 mt-12 flex text-lg items-center border-2 border-white text-white rounded pt-2.5 pb-2 px-4 group hover:bg-white hover:text-black hover:border-2'
               }>
               Contact us now
               <SvgArrowRight className={'ms-3 h-4 fill-white group-hover:fill-black'} />
            </button>
         </div>

         {/*Technologies*/}
         <div className={'my-20'}>
            <h1
               className={
                  'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-noto font-bold'
               }>
               Technologies
            </h1>

            <h2 className={'text-lg font-noto font-light text-white text-center'}>
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
                  <div className={'text-white font-light text-xl inline-block px-1'}>and more</div>
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
                     and more other
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
                  <div className={'text-white font-light text-xl inline-block px-1'}>and other</div>
                  <h4 className={'text-lg text-white font-light mt-2'}>
                     The most advanced cloud technologies for development
                  </h4>
               </div>
            </div>
         </div>

         <div className={'container columns-2 text-pretty indent-4'}>
            <p>
               Etiam sit amet orci eget eros faucibus tincidunt. Donec vitae orci sed dolor rutrum
               auctor. Vivamus aliquet elit ac nisl. In auctor lobortis lacus.
            </p>
            <p>
               Sed a libero. Curabitur nisi. Fusce risus nisl, viverra et, tempor et, pretium in,
               sapien. Etiam iaculis nunc ac metus.
            </p>
         </div>

         <div className={'grid grid-cols-8 gap-4'}>
            <div className={'border-amber-950 border'}>qwe</div>
            <div className={'border-amber-950 border'}>qwe</div>
            <div className={'border-amber-950 border'}>qwe</div>
            <div className={'border-amber-950 border'}>qwe</div>
            <div className={'border-amber-950 border'}>qwe</div>
            <div className={'border-amber-950 border'}>qwe</div>
            <div className={'border-amber-950 border'}>qwe</div>
            <div className={'border-amber-950 border'}>qwe</div>
         </div>

         {/* Display users */}
         <div className={'space-y-4'}>
            {users.map((user) => {
               return (
                  <div
                     key={user.email}
                     className={'flex items-start justify-between bg-gray-500 p-4 rounded-lg'}>
                     <CardComponent card={user} />
                     <button
                        onClick={() => deleteUser(user._id)}
                        className={
                           'flex items-center border-2 border-white text-white rounded py-1 px-4 test group hover:bg-white hover:text-black hover:border-2'
                        }>
                        Delete User
                        <SvgArrowRight className={'ms-3 h-3 fill-white group-hover:fill-black'} />
                     </button>
                  </div>
               );
            })}
         </div>

         {/* Form to add new user */}
         <form onSubmit={createUser} className={'p-4 bg-blue-100 rounded shadow'}>
            <input
               placeholder={'Name'}
               value={newUser.name}
               onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
               className={'mb-2 w-full p-2 border border-gray-300 rounded'}
            />
            <input
               placeholder="Email"
               value={newUser.email}
               onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
               className={'mb-2 w-full p-2 border border-gray-300 rounded'}
            />
            <input
               placeholder={'Password'}
               value={newUser.password}
               onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
               className={'mb-2 w-full p-2 border border-gray-300 rounded'}
            />
            <button
               type="submit"
               className={'w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600'}>
               Add User
            </button>
         </form>

         {/* Form to update user */}
         <form onSubmit={handleUpdateUser} className={'p-4 bg-green-100 rounded shadow'}>
            <input
               placeholder="User ID"
               value={updateUser.id}
               onChange={(e) => setUpdateUser({ ...updateUser, id: e.target.value })}
               className={'mb-2 w-full p-2 border border-gray-300 rounded'}
            />
            <input
               placeholder="New Name"
               value={updateUser.name}
               onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
               className={'mb-2 w-full p-2 border border-gray-300 rounded'}
            />
            <input
               placeholder="New Email"
               value={updateUser.email}
               onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
               className={'mb-2 w-full p-2 border border-gray-300 rounded'}
            />
            <button
               type="submit"
               className={'w-full p-2 text-white bg-green-500 rounded hover:bg-green-600'}>
               Update User
            </button>
         </form>

         <div id={'technologies'}>technologies</div>
      </div>
   );
};

export default Homepage;
