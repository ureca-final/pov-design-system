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
    darkBackground: {
      background: string;
      text: string;
    };
    lightBackground: {
      background: string;
      text: string;
    };
    darkBackgroundElevated: {
      background: string;
      text: string;
    };
    lightBackgroundElevated: {
      background: string;
      text: string;
    };

    darkBase: {
      primary: string;
      secondary: string;
      teritary: string;
      muted: string;
      faint: string;
    };
    lightBase: {
      primary: string;
      secondary: string;
      teritary: string;
      muted: string;
      faint: string;
    };

    color: { [key: string]: string };
    typography: TextStyle;
    spacer: { [key: string]: string };
    borderRadius: { [key: string]: string };
    boxShadow: { [key: string]: string };
  }
}