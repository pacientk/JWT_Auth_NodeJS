import React from 'react';
import type { AppProps } from 'next/app';
import { LayoutMain, Navbar } from '@/components/';
import AppHeadHtml from '@/components/AppHeadHtml';
import { appWithTranslation } from 'next-i18next';
import './globals.css';
import '../locales/i18n';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
   return (
      <>
         <AppHeadHtml />
         <LayoutMain>
            <>
               <Navbar />
               <Component {...pageProps} />
            </>
         </LayoutMain>
      </>
   );
}

export default appWithTranslation(App);
