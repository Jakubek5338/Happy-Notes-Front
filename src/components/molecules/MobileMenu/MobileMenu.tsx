import React, { useState } from 'react';
import MenuContext from '../../../context/MenuContext';
import MenuButton from '../../atoms/MenuButton/MenuButton';
import MobileMenuList from '../../atoms/MobileMenuList/MobileMenuList';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const setMenuOpen = () => setIsOpen(!isOpen);
  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setMenuOpen,
      }}
    >
      <div>
        <div className="relative z-20">
          <MenuButton menuContext={isOpen} />
        </div>
        <MobileMenuList menuContext={isOpen} />
      </div>
    </MenuContext.Provider>
  );
}

export default MobileMenu;
