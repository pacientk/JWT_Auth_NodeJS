import Document, {
   DocumentContext,
   DocumentInitialProps,
   Head,
   Html,
   Main,
   NextScript,
} from 'next/document';
import { Footer } from '@/components';
import React from 'react';
import i18n from '@/locales/i18n';

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
      const originalRenderPage = ctx.renderPage;

      // Run the React rendering logic synchronously
      ctx.renderPage = () =>
         originalRenderPage({
            // Useful for wrapping the whole react tree
            enhanceApp: (App) => App,
            // Useful for wrapping in a per-page basis
            enhanceComponent: (Component) => Component,
         });

      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx);

      return initialProps;
   }

   render() {
      const currentLocale = this.props.__NEXT_DATA__.locale || i18n?.language || 'en';
      const dir = currentLocale === 'he' ? 'rtl' : 'ltr';

      return (
         <Html className={'h-full'} dir={dir} lang={currentLocale}>
            <Head>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin={'use-credentials'}
               />
               {/*TODO убрать лишние шрифты*/}
               <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
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
   }
}

export default MyDocument;
