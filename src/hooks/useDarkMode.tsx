import { useEffect, useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    {
      localTheme ? setTheme(localTheme) : null;
    }
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);

  const setDarkMode = () => {
    setTheme(colorTheme);
    localStorage.setItem('theme', colorTheme);
  };

  return [colorTheme, setDarkMode] as const;
}

export default useDarkMode;
