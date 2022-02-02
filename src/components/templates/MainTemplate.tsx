import React, { FC } from 'react';
import NavBar from '../organisms/NavBar/NavBar';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
export default MainLayout;
