import { CardComponent } from '@/components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
   _id?: number;
   id: number;
   name: string;
   email: string;
}

const Homepage = () => {
   const apiUrl = process.env.API_URL || 'http://localhost:4000/api';
   const [users, setUsers] = useState<User[]>([]);
   const [newUser, setNewUser] = useState({ name: '', email: '' });
   const [updateUser, setUpdateUser] = useState({ id: '', name: '', email: '' });

   const fetchData = async () => {
      try {
         const response = await axios.get(`${apiUrl}/users`);
         setUsers(response.data.reverse());
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   // Fetch users
   useEffect(() => {
      fetchData();
   }, []);

   // Create a user
   const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
         const response = await axios.post(`${apiUrl}/users`, newUser);
         setUsers([response.data, ...users]);
         setNewUser({ name: '', email: '' });
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

   // Delete a user
   const deleteUser = async (userId: number) => {
      try {
         await axios.delete(`${apiUrl}/users/${userId}`);
         setUsers(users.filter((user) => user.id !== userId));
      } catch (error) {
         console.error('Error deleting user:', error);
      }
   };

   return (
      <div className="space-y-4 w-full max-w-2xl">
         <h1 className="text-4xl font-bold text-gray-800 text-center pt-20 pb-10">
            User Management App
         </h1>

         {/* Form to add new user */}
         <form onSubmit={createUser} className="p-4 bg-blue-100 rounded shadow">
            <input
               placeholder={'Name'}
               value={newUser.name}
               onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
               className="mb-2 w-full p-2 border border-gray-300 rounded"
            />

            <input
               placeholder="Email"
               value={newUser.email}
               onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
               className="mb-2 w-full p-2 border border-gray-300 rounded"
            />
            <button
               type="submit"
               className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
               Add User
            </button>
         </form>

         {/* Form to update user */}
         <form onSubmit={handleUpdateUser} className="p-4 bg-green-100 rounded shadow">
            <input
               placeholder="User ID"
               value={updateUser.id}
               onChange={(e) => setUpdateUser({ ...updateUser, id: e.target.value })}
               className="mb-2 w-full p-2 border border-gray-300 rounded"
            />
            <input
               placeholder="New Name"
               value={updateUser.name}
               onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
               className="mb-2 w-full p-2 border border-gray-300 rounded"
            />
            <input
               placeholder="New Email"
               value={updateUser.email}
               onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
               className="mb-2 w-full p-2 border border-gray-300 rounded"
            />
            <button
               type="submit"
               className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600">
               Update User
            </button>
         </form>

         {/* Display users */}
         <div className="space-y-2">
            {users.map((user) => {
               return (
                  <div
                     key={user._id}
                     className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                     <CardComponent card={user} />
                     <button
                        onClick={() => deleteUser(user.id)}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                        Delete User
                     </button>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Homepage;