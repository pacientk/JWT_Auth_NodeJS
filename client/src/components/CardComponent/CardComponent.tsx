import React from 'react';

interface Card {
   _id?: number;
   id: number;
   name: string;
   email: string;
}

const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
   return (
      <div className={'flex-1 me-6 bg-white rounded-lg p-2 mb-2 hover:bg-gray-100'}>
         <div className={'text-sm text-gray-600'}>ID: {card._id}</div>
         <div className={'text-lg font-semibold text-black'}>{card.name}</div>
         <div className={'text-md text-gray-700'}>{card.email}</div>
      </div>
   );
};

export default CardComponent;
