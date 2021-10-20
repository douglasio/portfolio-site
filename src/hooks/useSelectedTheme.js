import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import theme from '../style/theme';

const useSelectedTheme = () => {
    const [cookies, setCookie] = useCookies(['theme']);
  const [selectedTheme, setSelectedTheme] = useState(
    cookies.theme
  );

  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
  };

  const userPrefers =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';

  const toggleSelectedTheme = () => {
    if (selectedTheme === THEMES.LIGHT) {
      setCookie('theme', THEMES.DARK);
      setSelectedTheme(THEMES.DARK);
    } else {
      setCookie('theme', THEMES.LIGHT);
      setSelectedTheme(THEMES.LIGHT);
    }
  };

  const getTheme = () => {
    if (cookies.theme) {
      return cookies.theme;
    } else if (userPrefers) {
      return userPrefers;
    } else {
      return 'light';
    }
  };

  useEffect(() => {
    setSelectedTheme(getTheme());
  }, [getTheme]);

  return {
    selectedTheme: theme[selectedTheme],
    toggleSelectedTheme: toggleSelectedTheme,
  };
};

export default useSelectedTheme;
