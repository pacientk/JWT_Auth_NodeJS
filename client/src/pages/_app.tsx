import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Footer, LayoutMain, Navbar } from '@/components/';
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
               {/*<div*/}
               {/*   className={*/}
               {/*      'absolute opacity-40 top-0 left-0 bottom-0 font-openSans slashed-zero text-gray-800 z-0 text-xs text-pretty text-center'*/}
               {/*   }>*/}
               {/*   {backgrString}*/}
               {/*</div>*/}
               <Navbar />
               <Component {...pageProps} />
               <Footer />
            </>
         </LayoutMain>
      </>
   );
}

export default appWithTranslation(App);
