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

const TestPage = () => {
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
         <div className={'w-full max-w-7xl'}>
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
                           <SvgArrowRight
                              className={'ms-3 h-3 fill-white group-hover:fill-black'}
                           />
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
         </div>
      </div>
   );
};

export default TestPage;
