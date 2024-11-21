import React, { createContext, useContext, useState, useEffect } from 'react';
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

  // pov-design-system의 theme 객체 사용
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  console.log('Current Theme:', theme);
  console.log('Current Theme Object:', currentTheme);
  console.log('Stored Theme:', localStorage.getItem('theme'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
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
