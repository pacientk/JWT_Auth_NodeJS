import React from 'react';

const LoadingSpinner = () => {
   return (
      <div className={'ss-loader-spinner'}>
         <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
};

export default LoadingSpinner;
