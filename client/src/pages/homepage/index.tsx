import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ButtonXL from '../../components/ButtonXL';
import { useTranslation } from 'next-i18next';
import { HomePage_SectionsContent } from '@/utils/constants';
import { PageHead } from '@/components';

const Homepage = () => {
   const { t } = useTranslation();

   return (
      <>
         <PageHead />
         <div
            className={
               'bg-contain bg-no-repeat bg-none sm:bg-[url(/assets/images/bg_img.webp)] sm:bg-[center_top_18rem] md:bg-[center_top_24rem] lg:bg-[center_top_18rem] xl:bg-[center_top_16rem]'
            }>
            <section className={'w-full max-w-6xl mx-auto mt-16 sm:mt-0 sm:mb-36'}>
               <h1
                  className={
                     'mt-16 mb-12 pt-6 pb-0 px-2 lg:text-8xl md:text-7xl sm:text-7xl text-6xl tracking-tight text-white text-center font-semibold'
                  }>
                  {t('hp_BasicTitle', { ns: 'homePage' })}
               </h1>

               <div className="w-auto md:w-1/2 content-center m-auto flex">
                  <h2 className={'text-white text-center text-lg font-normal px-4'}>
                     {t('hp_BasicSubTitle', { ns: 'homePage' })}
                  </h2>
               </div>

               <div className={'flex columns-2 justify-between'}>
                  <ButtonXL content={t('btn_ContactUsNow')} routeName={'/contactus'} />
               </div>
            </section>

            {/* Technologies */}
            <section
               className={
                  'w-full mt-[150px] sm:mt-[300px] md:mt-[400px] lg:mt-[380px] xl:mt-[550px] max-w-6xl mx-auto px-4'
               }>
               <h1
                  className={
                     'px-9 pt-6 pb-6 text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'
                  }>
                  {t('technologies.title', { ns: 'homePage' })}
               </h1>

               <h2 className={'text-white text-center text-lg font-normal'}>
                  {t('technologies.subTitle', { ns: 'homePage' })}
               </h2>

               <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16'}>
                  {HomePage_SectionsContent.technologies.sections.map((item) => (
                     <div key={uuidv4()} className="mt-24 overflow-hidden text-center">
                        {/*<Image*/}
                        {/*   className={'mb-8 m-auto'}*/}
                        {/*   src={item.img}*/}
                        {/*   alt={item.extText}*/}
                        {/*   width={144}*/}
                        {/*   height={144}*/}
                        {/*/>*/}
                        <h3 className={'mb-6 text-3xl z-10 text-white font-semibold'}>
                           {item.title}
                        </h3>
                        {item.techNames.map((name, i) => (
                           <div
                              key={uuidv4()}
                              className={`bg-white text-backgr text-xl rounded-full font-semibold inline-block py-0.5 px-2.5 my-1 ${
                                 item.techNames.length - 1 !== i ? 'me-3' : ''
                              }`}>
                              {name}
                           </div>
                        ))}
                        <div className={'text-white font-normal text-xl inline-block px-1'}>
                           {item.extText}
                        </div>
                        <h4 className={'text-lg text-white font-normal mt-2'}>{item.text}</h4>
                     </div>
                  ))}
               </div>

               {/*SubTitile Section*/}
               <div className={'flex justify-center mt-16'}>
                  <h2 className={'w-2/3 justify-center text-lg font-normal text-white text-center'}>
                     Unleash your business potential with our innovative and reliable software
                     solutions that streamline workflow, boost productivity, and empower your
                     success.
                  </h2>
               </div>

               <div className={'flex columns-2 justify-between'}>
                  <ButtonXL content={'Contact us'} routeName={'/contactus'} />
               </div>
            </section>
         </div>
      </>
   );
};

export default Homepage;
