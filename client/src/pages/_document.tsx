import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function _document() {
   return (
      <Html className="h-full bg-white" dir={'ltr'} lang="en">
         <Head />

         <body className={'h-full'}>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
