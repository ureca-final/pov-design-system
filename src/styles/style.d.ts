import '@emotion/react';

interface TextStyle {
  [key: string]: {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
  };
}

declare module '@emotion/react' {
  export interface Theme {
    background: string;
    text: string;
    color: { [key: string]: string };
    typography: TextStyle;
    spacer: { [key: string]: string };
    borderRadius: { [key: string]: string };
    boxShadow: { [key: string]: string };
  }
}