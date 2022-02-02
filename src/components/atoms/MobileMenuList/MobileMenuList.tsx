import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import NavLink from '../NavLink/NavLink';
import MenuContext from '../../../context/MenuContext';
import LogOutButton from '../LogOutButton/LogOutButton';

const menuItems = [
  { name: 'Notes', href: '/Notes' },
  { name: 'Todos', href: '/Todo' },
  { name: 'Sides', href: '/Sides' },
];

const variants = {
  open: { x: 0, display: 'flex' },
  closed: { x: '100%', display: 'none' },
};

type menuContextType = { menuContext: boolean };

function MobileMenuList({ menuContext }: menuContextType) {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : {};
  let state = 'closed';
  if (menuContext) {
    state = 'open';
  } else {
    state = 'closed';
  }
  return (
    <MenuContext.Consumer>
      {({ setMenuOpen }) => (
        <>
          <motion.div
            animate={state}
            variants={variants}
            transition={transition}
            className="absolute right-0 top-0 w-3/5 h-full dark:bg-gray-800 bg-white z-10 pt-40 flex flex-col justify-between border-l-2 dark:border-white border-black"
          >
            <div className="w-full h-48 flex flex-col items-center justify-around">
              {menuItems.map((item) => (
                <NavLink to={item.href} key={item.name} onClick={setMenuOpen}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div>
              <div className=" w-full h-28 flex items-center justify-center">
                <DarkModeToggle />
              </div>
              <div className=" w-full h-28 flex items-center justify-center">
                <LogOutButton />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </MenuContext.Consumer>
  );
}

export default MobileMenuList;
