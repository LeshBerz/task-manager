import { useEffect } from 'react';
import { useThemeStore } from '@features/theme-switch/store/ThemeStore';

/**
 * Theme provider to initialize theme
 */
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeStore = useThemeStore();

  useEffect(() => {
    themeStore.loadFromLocalStorage();
  }, [themeStore]);

  return <>{children}</>;
};

export default ThemeProvider;