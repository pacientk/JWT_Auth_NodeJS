import Head from 'next/head';
import React from 'react';

interface PageHeadProps {
   title?: string;
   pageName?: string;
}

const PageHead: React.FC<PageHeadProps> = ({
   title = '0/1 Combine — Mobile App and Web Development Experts',
   pageName,
}) => {
   const fullTitle = pageName ? `${pageName} — 0/1 Combine` : title;

   return (
      <Head>
         <title>{`${fullTitle}`}</title>
      </Head>
   );
};

export default PageHead;
