import React from 'react';

interface IMenuContext {
  isOpen: boolean;
  setMenuOpen?: () => void;
}

const defaultMenuState = {
  isOpen: false,
};

const MenuContext = React.createContext<IMenuContext>(defaultMenuState);

export default MenuContext;
