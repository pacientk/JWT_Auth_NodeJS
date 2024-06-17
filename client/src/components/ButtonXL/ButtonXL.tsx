import { SvgArrowRight } from '@/assets/svgSources';
import React from 'react';
import Link from 'next/link';
import { Route } from 'next';

interface IButtonXLProps {
   content: string;
   routeName: Route;
   containerStyle?: string;
}

const ButtonXL = ({ content, routeName, containerStyle = '' }: IButtonXLProps) => {
   return (
      <div className={`flex m-auto my-12 ${containerStyle}`}>
         <Link
            href={routeName || '/'}
            className={
               'content-center max-h-14 flex text-lg items-center border-2 border-white text-white rounded-full pt-2.5 pb-2 px-6 group hover:bg-white hover:text-black hover:border-2'
            }>
            <>
               {content || 'Not defined'}
               <SvgArrowRight className={'ms-3 h-4 fill-white group-hover:fill-black'} />
            </>
         </Link>
      </div>
   );
};

export default ButtonXL;
