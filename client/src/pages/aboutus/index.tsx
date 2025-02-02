import React from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageHead } from '@/components';

const AboutUs = () => {
   const { t } = useTranslation(['aboutus', 'common']);

   return (
      <>
         <PageHead pageName={t('aboutus.title')} />

         <section className={'max-w-6xl mx-auto px-4 mb-48'}>
            <div className={'mt-32 mb-5'}>
               <h1
                  className={
                     'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'
                  }>
                  {t('aboutus.title')}
               </h1>
            </div>
            <div className="w-auto md:w-2/3 content-center m-auto flex">
               <h2 className={'text-white text-center text-lg font-normal px-4'}>
                  {t('aboutus.subtitle')}
               </h2>
            </div>

            <div className={'container sm:columns-2 text-pretty gap-x-16 my-16'}>
               <p className={'leading-loose text-white font-normal text-wrap '}>
                  {t('aboutus.content')}
               </p>
            </div>

            {/*SubTitile Section*/}
            <div className={'flex justify-center mt-5 mb-10'}>
               <h2 className={'w-2/3 justify-center text-lg font-normal text-white text-center'}>
                  {t('aboutus.subtitle')}
               </h2>
            </div>
         </section>
      </>
   );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
   return {
      props: {
         ...(await serverSideTranslations(locale || 'en', ['common', 'aboutus'])),
      },
   };
};

export default AboutUs;
