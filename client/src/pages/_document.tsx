import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { backgrString } from '@/utils/constants';

export default function _document() {
   return (
      <Html className={'h-full bg-backgr'} dir={'ltr'} lang="en">
         <Head />

         <body className={'h-full'}>
            <div
               className={
                  'absolute h-[865px] top-0 left-0 bottom-0 text-backgr z-0 text-xs text-pretty text-center'
               }>
               {backgrString}
            </div>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
