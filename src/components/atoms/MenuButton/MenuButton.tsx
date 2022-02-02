import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import MenuContext from '../../../context/MenuContext';

type menuContextType = { menuContext: boolean };

function MenuButton({ menuContext }: menuContextType) {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : {};
  let state = 'closed';
  if (menuContext) {
    state = 'open';
  } else {
    state = 'closed';
  }
  const topVariants = {
    open: { rotate: 45, y: 7 },
    closed: { rotate: 0, y: 0 },
  };

  const centerVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomVariants = {
    open: { rotate: -45, y: -5 },
    closed: { rotate: 0, y: 0 },
  };
  return (
    <MenuContext.Consumer>
      {({ setMenuOpen }) => (
        <>
          <button
            onClick={setMenuOpen}
            className="focus:border-primary hover:border-primary border-secondary dark:text-white text-black inline-flex items-center justify-center p-1 w-14 h-14 focus:outline-none transition"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.rect
                animate={state}
                variants={topVariants}
                transition={transition}
                x="6"
                y="9"
                width="20"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <motion.rect
                animate={state}
                variants={centerVariants}
                transition={transition}
                x="6"
                y="15"
                width="20"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <motion.rect
                animate={state}
                variants={bottomVariants}
                transition={transition}
                x="6"
                y="21"
                width="20"
                height="2"
                rx="1"
                fill="currentColor"
              />
            </svg>
          </button>
        </>
      )}
    </MenuContext.Consumer>
  );
}

export default MenuButton;
