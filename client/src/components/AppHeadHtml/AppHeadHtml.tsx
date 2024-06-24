import Head from 'next/head';
import React from 'react';

const AppHeadHtml = () => {
   return (
      <Head>
         <meta charSet="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <title>0/1 Combine — Mobile App and Web Development Experts</title>
         <meta
            name="description"
            content="0/1 Combine: Your partner in mobile app development for iOS and Android. We also specialize in building robust websites and web services tailored to your needs."
         />
         <meta name="robots" content="index, follow" />
         <meta name="author" content="0/1 Combine" />
         <meta
            name="keywords"
            content="0/1 Combine, mobile app development, iOS app development, Android app development, web development, web services, custom software development, mobile solutions, web solutions"
         />

         {/*Open Graph*/}
         <meta property="og:title" content="0/1 Combine - Mobile App and Web Development Experts" />
         <meta
            property="og:description"
            content="0/1 Combine: Your partner in mobile app development for iOS and Android using React Native. We also specialize in building robust websites and web services tailored to your needs."
         />
         <meta property="og:type" content="website" />
         <meta property="og:url" content="https://www.01combine.com" />
         <meta property="og:title" content="0/1 Combine — Mobile App and Web Development Experts" />
         <meta property="og:image" content="https://www.01combine.com/assets/images/og-image.jpg" />
         <meta
            property="og:description"
            content="0/1 Combine: Your partner in mobile app development for iOS and Android. We also specialize in building robust websites and web services tailored to your needs."
         />

         {/*Twitter Cards*/}
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:site" content="@01Combine" />
         <meta name="twitter:creator" content="@01Combine" />
         <meta
            name="twitter:title"
            content="0/1 Combine - Mobile App and Web Development Experts"
         />
         <meta
            name="twitter:description"
            content="0/1 Combine: Your partner in mobile app development for iOS and Android using React Native. We also specialize in building robust websites and web services tailored to your needs."
         />
         <meta
            name="twitter:image"
            content="https://www.01combine.com/assets/images/twitter-image.jpg"
         />

         {/*Canonical URL*/}
         <link rel="canonical" href="https://www.01combine.com" />
         {/*favicons*/}
         <link rel="icon" href="assets/favicon/favicon.ico" />
         <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png" />
         <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png" />
         <link rel="manifest" href="assets/favicon/site.webmanifest" />
         <link rel="mask-icon" href="assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
         <link rel="shortcut icon" href="assets/favicon/favicon.ico" />
         <meta name="msapplication-TileColor" content="#da532c" />
         <meta name="msapplication-config" content="assets/favicon/browserconfig.xml" />
         <meta name="theme-color" content="#ffffff" />
      </Head>
   );
};

export default AppHeadHtml;
