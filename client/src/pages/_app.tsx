import React from 'react';
import type { AppProps } from 'next/app';
import { LayoutMain } from '@/components/';
import AppHeadHtml from '@/components/AppHeadHtml';
import { appWithTranslation } from 'next-i18next';
import './globals.css';
import '../i18n';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
   return (
      <>
         <AppHeadHtml />
         <LayoutMain>
            <Component {...pageProps} />
         </LayoutMain>
      </>
   );
}

export default appWithTranslation(App);
