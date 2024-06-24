import Document, {
   DocumentContext,
   DocumentInitialProps,
   Head,
   Html,
   Main,
   NextScript,
} from 'next/document';
import React from 'react';
import i18n from '@/locales/i18n';
import { GoogleAnalytics } from '@next/third-parties/google';

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
               <Main />
               <NextScript />
            </body>
            <GoogleAnalytics gaId={'G-YBGBF05RJQ'} />
         </Html>
      );
   }
}

export default MyDocument;
