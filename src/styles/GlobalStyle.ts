import { css } from '@emotion/react';

import { themes } from './Theme';
export type TypeofTheme = keyof typeof themes; //모드의 type("light" | "dark")

export type StyleMode = {
  toggleStyle: (mode: TypeofTheme) => void; //현재 모드를 바꿔주는 함수
  theme: TypeofTheme; //현재모드
};

export const GlobalStyle = (theme: TypeofTheme) => css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul, ol, li {
    list-style: none;
  }

  html, body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Pretendard';
    font-size: 16px;
    color: ${themes[theme].primary};
    background-color: ${themes[theme].background};
  }

  a {
    text-decoration: none;
  }
`;
