import Image from 'next/image';
import { SvgBrandLogo } from '@/assets/svgSources';
import React from 'react';

const Footer = () => {
   return (
      <section
         style={{
            // boxShadow: '0 8px 32px 50px rgba( 132,37,173, 0.25 )',
            borderTop: '1px solid rgba( 255,255, 255, 0.18 )',
         }}
         className={'w-full mt-48 backdrop-blur-lg bg-black bg-opacity-60'}>
         <div className={'max-w-6xl mx-auto px-4 mb-48'}>
            <div className={'grid grid-cols-1 md:grid-cols-3 md:p-20 gap-x-0 p-4'}>
               <Image
                  className={'m-auto w-36 mb-12'}
                  src={'/assets/images/thec_items_08_08.png'}
                  alt={'0/1 COMBINE — Footer | About us'}
                  width={144}
                  height={144}
               />
               <div className={'mb-6'}>
                  <div className={'mb-6'}>
                     <SvgBrandLogo className={'h-6 fill-white me-5'} />
                  </div>
                  <div className={'text-white'}>
                     Migdal Sonol
                     <br />
                     52 Menachem Begin,
                     <br />
                     Tel Aviv, 67137
                     <br />
                     <br />
                     Tel: 052-8287009
                     <br />
                     Email:{'\u00A0'}
                     <a
                        className={'underline underline-offset-2'}
                        href={'mailto:contactus@01combine.com'}>
                        contactus@01combine.com
                     </a>
                  </div>
               </div>
               <div className={'mb-6'}>
                  <div className={'text-white font-light text-sm'}>
                     At our company, we specialize in creating cutting-edge mobile and web
                     applications tailored to your unique business needs. Our expert development
                     team is dedicated to transforming your ideas into reality, ensuring
                     high-quality and innovative solutions. Partner with us to drive your digital
                     success and stay ahead in the competitive market.
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Footer;
