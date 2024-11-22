const color = {
    /** Black & White **/
    black: 'black',
    white: 'white',
    /** Gray */
    gray800: '#333036',
    gray700: '#28262B',
    gray600: '#5C595E',
    gray500: '#858386',
    gray400: '#ADACAF',
    gray300: '#D6D6D7',
    gray200: '#EBEAEB',
    gray100: '#F5F5F5',
  
    /** Tint **/
    purple600: '#7E16FD',
    purple500: '#9549FF',
    purple400: '#AA6FFF',
    purple300: '#C49BFF',
    purple200: '#DCC4FE',
    purple100: '#F2E7FF',
  
    green600: '#1BD27D',
    green500: '#0DE781',
    green400: '#25F281',
    green300: '#85F6A9',
    green200: '#BAF9CB',
    green100: '#E2FDEA',

    red: '#F74F3B',
    blue: "#00C3FF",
    yellow: "#FFEB00",

  } as const;
  
const typography = {
  heading01: {
    fontSize: '2.4rem',
    lineHeight: '120%',
    fontWeight: 700,
  },
  heading02: {
      fontSize: '2.0rem',
      lineHeight: '120%',
      fontWeight: 700,
  },
  heading03: {
      fontSize: '1.8rem',
      lineHeight: '120%',
      fontWeight: 700,
  },
  heading04: {
      fontSize: '1.6rem',
      lineHeight: '120%',
      fontWeight: 700,
  },
  heading05: {
      fontSize: '1.4rem',
      lineHeight: '120%',
      fontWeight: 700,
  },
  body01: {
      fontSize: '1.6rem',
      lineHeight: '120%',
      fontWeight: 500,
  },
  body02: {
      fontSize: '1.4rem',
      lineHeight: '120%',
      fontWeight: 500,
  },
  body03: {
      fontSize: '1.2rem',
      lineHeight: '120%',
      fontWeight: 400,
  },
  body04: {
      fontSize: '1.1rem',
      lineHeight: '120%',
      fontWeight: 400,
  },
  paragraph: {
    fontSize: '1.6rem',
    lineHeight: '160%',
    fontWeight: 400,
  },
  badge: {
    fontSize: '1.2rem',
    lineHeight: '100%',
    fontWeight: 700,
  }
} as const;
  
const spacer = {
  spacing0: '0',
  spacing1: '4px',
  spacing2: '8px',
  spacing3: '16px',
  spacing4: '24px',
  spacing5: '32px',
  spacing6: '48px',
  spacing7: '64px',
  spacing8: '96px',
  spacing9: '128px',
} as const;

const borderRadius = {
  small: '4px',
  /** default border radius */
  medium: '8px',
  large: '20px',
} as const;

const boxShadow = {
  shadow1: '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
  shadow2: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
  shadow3: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
  shadow4: '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)',
  shadow5: '1px 2px 4px 0px rgba(0, 0, 0, 0.15)',
  shadow6: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
  shadow7: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
  shadow8: '0px 0px 5px 0px rgba(0, 0, 0, 0.15)',
  shadow9: '0px 0px 10px 0px rgba(0, 0, 0, 0.20)',
  shadow10: '0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset',
} as const;

const zIndex = {
  overlayPeak: 4,
  overlayTop: 3,
  overlayMiddle: 2,
  overlayBottom: 1,
} as const;
  

const darkTheme = { // 다크 모드시 스타일
  background: '#333036',
  backgroundElevated: '#4C494E',
  primary: '#FFFFFF',
  secondary: '#E5E5E5',
  teritary: '#ADACAF',
  muted: '#858386',
  faint: '#676668',
  color,
  typography,
  spacer,
  borderRadius,
  boxShadow,
  zIndex,
}

const lightTheme = { // 라이트 모드시 스타일
  background: '#F5F5F5',
  backgroundElevated: '#FFFFFF',
  primary: '#333036',
  secondary: '#676668',
  teritary: '#ADACAF',
  muted: '#C9C9CA',
  faint: '#E5E5E5',
  color,
  typography,
  spacer,
  borderRadius,
  boxShadow,
  zIndex,
}

// Theme 타입 정의
export type ThemeType = typeof lightTheme;

// themes 객체에 대한 타입 정의
export const themes: { light: ThemeType; dark: ThemeType } = {
  light: lightTheme,
  dark: darkTheme,
};