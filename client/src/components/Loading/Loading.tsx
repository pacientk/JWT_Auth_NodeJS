import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

const Loading = () => {
   return (
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
         <LoadingSpinner />
      </div>
   );
};

export default Loading;
