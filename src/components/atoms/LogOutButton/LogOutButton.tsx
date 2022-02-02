import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

function LogOutButton() {
  const { signOut } = useAuth();
  return (
    <Link
      to="/notes"
      className="dark:bg-white bg-green-600 w-36 md:w-20 h-8 rounded-lg flex justify-center items-center hover:bg-green-700 dark:hover:bg-gray-400 dark:hover:text-green-200 duration-100 transition-all ease-in-out"
    >
      <button onClick={() => signOut()}>
        <h1 className="dark:text-green-700 text-white">LogOut</h1>
      </button>
    </Link>
  );
}

export default LogOutButton;
