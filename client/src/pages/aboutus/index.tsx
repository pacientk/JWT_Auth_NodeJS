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

            <div className={'grid grid-cols-2 gap-x-16'}>
               <div className={'leading-loose text-white text-wrap '}>
                  Our story began in 2015 and since then we have developed many interesting apps and
                  websites for organizations of different sizes, and many uniq software solutions.
                  Our experience includes working with startups, advertising and media agencies,
                  private entrepreneurs, and others.
               </div>
               <div>11</div>
               <div>11</div>
               <div>11</div>
            </div>

            <div className={'container sm:columns-2 text-pretty gap-x-16 my-16'}>
               <p className={'leading-loose text-white font-normal text-wrap '}>
                  {t('aboutus.content')}
                  {/*Our story began in 2015 and since then we have developed many interesting apps and websites for organizations of different sizes, and many uniq software solutions. Our experience includes working with startups, advertising and media agencies, private entrepreneurs, and others.*/}

                  {/*What makes us special?*/}
                  {/*Our team includes talented developers, professional product managers, and experienced UI/UX specialists. We have mastered the most advanced technologies. Our arsenal includes client and server side, cloud technologies, setting up and configuring LLM/AI for user needs, machine learning, data management, and more.*/}

                  {/*What makes us unique?*/}
                  {/*We specialize in customized solutions to meet each client's requirements and needs. We offer a full product development cycle from ideation to full realization, and can effectively integrate into existing projects at any stage of development. This allows 0/1 Combine to provide excellent service to every client, of any size and from any business sector.*/}

                  {/*0/1 Combine today*/}
                  {/*Today, 0/1 Combine is a dynamic and growing company with a successful track record. We are distinguished by efficiency and promptness in solving any problem. We are ready to provide excellent service to every client, regardless of their size or area of business. We have a unique ability to quickly get involved in any project and solve problems at the highest level.*/}

                  {/*Come to 0/1 Combine and we will turn your ideas into reality!*/}
                  {/*With us, you will be confident in the future.*/}
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
