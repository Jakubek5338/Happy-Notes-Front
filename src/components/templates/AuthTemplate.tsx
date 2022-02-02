import React, { FC } from 'react';

const AuthTemplate: FC = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-green-900 auto-rows-min 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 flex justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default AuthTemplate;
