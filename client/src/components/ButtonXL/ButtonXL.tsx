import { SvgArrowRight } from '@/assets/svgSources';
import React from 'react';
import { Route } from 'next';

interface IButtonXLProps {
   type?: 'button' | 'submit' | 'reset';
   content: string;
   routeName?: Route;
   containerStyle?: string;
}

const ButtonXL = ({ type, content, routeName, containerStyle = '' }: IButtonXLProps) => {
   return (
      <div className={`flex m-auto my-12 ${containerStyle}`}>
         <button
            type={type}
            onClick={() => {}}
            className={
               'content-center max-h-14 flex text-lg items-center border-2 border-white text-white rounded-full pt-2.5 pb-2 px-6 group hover:bg-white hover:text-black hover:border-2'
            }>
            {content || 'Not defined'}
            <SvgArrowRight className={'ms-3 h-4 fill-white group-hover:fill-black'} />
         </button>
         {/*<Link*/}
         {/*   type={type}*/}
         {/*   href={routeName || ''}*/}
         {/*   className={*/}
         {/*      'content-center max-h-14 flex text-lg items-center border-2 border-white text-white rounded-full pt-2.5 pb-2 px-6 group hover:bg-white hover:text-black hover:border-2'*/}
         {/*   }>*/}
         {/*   <>*/}
         {/*      {content || 'Not defined'}*/}
         {/*      <SvgArrowRight className={'ms-3 h-4 fill-white group-hover:fill-black'} />*/}
         {/*   </>*/}
         {/*</Link>*/}
      </div>
   );
};

export default ButtonXL;
