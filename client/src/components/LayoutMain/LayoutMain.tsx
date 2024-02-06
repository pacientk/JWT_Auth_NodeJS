import React from 'react';
import { Navbar } from '@/components';

interface IProps {
   children: JSX.Element;
}

const LayoutMain: React.FC<IProps> = ({ children }) => {
   return (
      <>
         <Navbar />
         <main>{children}</main>
      </>
   );
};

export default LayoutMain;
