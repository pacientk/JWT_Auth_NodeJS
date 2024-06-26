import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
   const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

   // Check if measurementId is available
   if (!measurementId) {
      console.error('NEXT_PUBLIC_MEASUREMENT_ID is not set');
      return null;
   }

   return (
      <>
         <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
         />
         <Script id="" strategy="lazyOnload">
            {`
              if (typeof window !== 'undefined') {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${measurementId}', {
                  page_path: window.location.pathname,
                });
              }
          `}
         </Script>
      </>
   );
};

export default GoogleAnalytics;
