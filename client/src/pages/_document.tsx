import { Footer } from '@/components';
import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const Document = () => {
   return (
      <Html className={'h-full'} dir={'ltr'} lang="en">
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin={'use-credentials'}
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin={'use-credentials'}
            />
            {/*TODO убрать лишние шрифты*/}
            <link
               href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
               rel="stylesheet"
            />
         </Head>

         <body className={'h-full bg-bgColored bg-cover bg-black'}>
            {/*<div*/}
            {/*   className={*/}
            {/*      'absolute opacity-40 top-0 left-0 bottom-0 font-openSans slashed-zero text-gray-800 z-0 text-xs text-pretty text-center'*/}
            {/*   }>*/}
            {/*   {backgrString}*/}
            {/*</div>*/}
            <Main />
            <NextScript />
            <Footer />
         </body>
      </Html>
   );
};

export default Document;
