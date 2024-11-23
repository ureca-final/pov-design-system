import { createContext, useContext, useState, useEffect } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import type { PropsWithChildren } from 'react';
import { GlobalStyle, StyleMode, TypeofTheme } from './styles/GlobalStyle';
import { themes, ThemeType } from './styles/Theme';

const ThemeContext = createContext<StyleMode | null>(null); //Context 생성

type PovProviderProps = PropsWithChildren;

export const PovProvider = ({ children }: PovProviderProps) => {
  const [theme, setTheme] = useState<TypeofTheme>("dark"); //현재 모드값에 대한 state

  const toggleStyle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }; //클릭시 현재 모드값을 바꾸는 함수

  useEffect(() => {
    const nowTheme = (localStorage.getItem("theme") as TypeofTheme) || "dark"; // 기본값 설정
    setTheme(nowTheme);
  }, []); //초기 실행시 현재 모드값 읽기

  return (
    <ThemeContext.Provider value={{ theme, toggleStyle }}>
      <ThemeProvider theme={themes[theme]}>
        <Global styles={GlobalStyle(theme)} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// PovProvider.tsx
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a PovProvider');
  }

  const { theme, toggleStyle } = context;

  // 반환되는 theme 타입 설정
  const themeObject: ThemeType = themes[theme]; // "light" 또는 "dark"에 따른 객체 반환
  return { theme: themeObject, toggleStyle };
};

