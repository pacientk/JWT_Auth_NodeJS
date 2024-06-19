import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { LayoutMain, Navbar } from '@/components/';
import AppHeadHtml from '@/components/AppHeadHtml';
import { appWithTranslation } from 'next-i18next';
import './globals.css';
import '../locales/i18n';
import { useRouter } from 'next/router';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
   const router = useRouter();

   useEffect(() => {
      const dir = router.locale === 'he' ? 'rtl' : 'ltr';
      // @ts-ignore
      document.querySelector('body').setAttribute('dir', dir);
   }, [router.locale]);

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
