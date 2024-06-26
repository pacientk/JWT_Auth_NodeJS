import React from 'react';
import Homepage from '@/pages/homepage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const Home = () => {
   return <Homepage />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
   return {
      props: {
         ...(await serverSideTranslations(locale || 'en', ['common', 'homePage'])),
      },
   };
};

export default Home;
