import React, { createContext, useContext, useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import type { PropsWithChildren } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/Theme';

interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

type PovProviderProps = PropsWithChildren;

export const PovProvider = ({ children }: PovProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Global styles={GlobalStyle} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a PovProvider');
  }
  return context;
};
