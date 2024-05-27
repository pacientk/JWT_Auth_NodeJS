import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { backgrString } from '@/utils/constants';

export default function _document() {
   return (
      <Html className={'h-full bg-backgr'} dir={'ltr'} lang="en">
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin={'use-credentials'}
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&family=Noto+Sans+Hebrew:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
               rel="stylesheet"
            />
         </Head>

         <body className={'h-full'}>
            <div
               className={
                  'absolute top-0 left-0 bottom-0 font-openSans slashed-zero text-backgr z-0 text-xs text-pretty text-center'
               }>
               {backgrString}
            </div>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
