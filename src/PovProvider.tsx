import React, { createContext, useContext, useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import type { PropsWithChildren } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { lightTheme, darkTheme, Theme as AppTheme } from './styles/Theme';

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

  // `ThemeProvider`가 요구하는 타입으로 theme 객체 구성
  const themeObject = {
    ...AppTheme, // 기존 Theme 객체 포함
    ...(theme === 'light' ? lightTheme : darkTheme), // 라이트/다크 테마 통합
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeObject}>
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
