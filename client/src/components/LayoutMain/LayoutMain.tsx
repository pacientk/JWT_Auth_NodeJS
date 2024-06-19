import React from 'react';

interface IProps {
   children: JSX.Element;
}

const LayoutMain: React.FC<IProps> = ({ children }) => {
   return <main className={'relative'}>{children}</main>;
};

export default LayoutMain;
