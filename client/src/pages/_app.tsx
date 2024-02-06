import './globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { LayoutMain } from '@/components/';
import AppHeadHtml from '../components/AppHeadHtml';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
   return (
      <>
         <AppHeadHtml />
         <LayoutMain>
            <Component {...pageProps} />
         </LayoutMain>
      </>
   );
}
