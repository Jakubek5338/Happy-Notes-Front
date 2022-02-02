import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../../atoms/NavLink/NavLink';
import MobileMenu from '../../molecules/MobileMenu/MobileMenu';
import DarkModeToggle from '../../atoms/DarkModeToggle/DarkModeToggle';
import LogOutButton from '../../atoms/LogOutButton/LogOutButton';

const menuItems = [
  { name: 'Notes', href: '/notes' },
  { name: 'Todos', href: '/todo' },
  { name: 'Sides', href: '/sides' },
];

function NavBar() {
  return (
    <div className="w-full h-20 dark:text-white text-black dark:bg-gray-800 bg-white flex justify-between px-6 border-b-2 dark:border-white border-black">
      <div className=" w-52 flex justify-center items-center">
        <Link to="/notes">
          <h1 className="text-xl dark:hover:text-gray-500 hover:text-gray-600 duration-100 transition-all ease-in-out">
            Happy Notes
          </h1>
        </Link>
      </div>
      <div className=" flex justify-center items-center">
        <div className="hidden md:flex md:justify-between md:w-80 md:mx-8">
          {menuItems.map((item) => (
            <NavLink to={item.href} key={item.name}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <div className="md:flex w-40 hidden h-full">
          <div className=" w-1/2 h-full flex items-center justify-center">
            <DarkModeToggle />
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <LogOutButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
