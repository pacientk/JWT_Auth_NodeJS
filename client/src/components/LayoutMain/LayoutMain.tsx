import React from 'react';
import { GoogleAnalytics } from '@/components';

interface IProps {
   children: JSX.Element;
}

const LayoutMain: React.FC<IProps> = ({ children }) => {
   return (
      <>
         <GoogleAnalytics />
         <main className={'relative'}>{children}</main>
      </>
   );
};

export default LayoutMain;
