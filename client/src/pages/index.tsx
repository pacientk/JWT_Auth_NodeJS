import React from 'react';
import Head from 'next/head';
import Homepage from '@/pages/homepage';

/**
 * If you export a function called getStaticProps (Static Site Generation) from a page,
 * Next.js will pre-render this page at build time using the props returned by getStaticProps.
 * See: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props
 */
// type Repo = {
//    name: string;
//    stargazers_count: number;
// };
// export const getStaticProps = (async (context) => {
//    const res = await fetch('https://api.github.com/repos/vercel/next.js');
//    const repo = await res.json();
//    return { props: { repo } };
// }) satisfies GetStaticProps<{
//    repo: Repo;
// }>;
// export default function Home({ repo }: InferGetStaticPropsType<typeof getStaticProps>) {
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
   return {
      props: {
         ...(await serverSideTranslations(locale || 'en', [
            'common',
            'home-page',
            'aboutus',
            'nav-bar',
            'contactus',
         ])),
      },
   };
};

const Home = () => {
   return (
      <main>
         <Head>
            <title>0/1 COMBINE — best technological solutions</title>
         </Head>
         <Homepage />
      </main>
   );
};

export default Home;
