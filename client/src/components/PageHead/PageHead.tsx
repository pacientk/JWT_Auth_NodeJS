import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import React from 'react';

interface PageHeadProps {
   pageName?: string;
}

const PageHead: React.FC<PageHeadProps> = ({ pageName }) => {
   const { t } = useTranslation('common');
   const fullTitle = pageName ? `${pageName} — 0/1 Combine` : t('headTitle');

   return (
      <Head>
         <title>{`${fullTitle}`}</title>
      </Head>
   );
};

export default PageHead;
