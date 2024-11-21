const darkBackground = {
	background: '#333036',
  backgroundElevated: '#4C494E'
};

const lightBackground = {
	background: '#F5F5F5',
  backgroundElevated: '#FFFFFF'
};

const darkBase = {
  primary: '#FFFFFF',
  secondary: '#E5E5E5',
  teritary: '#ADACAF',
  muted: '#858386',
  faint: '#676668'
}

const lightBase = {
  primary: '#333036',
  secondary: '#676668',
  teritary: '#ADACAF',
  muted: '#C9C9CA',
  faint: '#E5E5E5'
};

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
  h1: {
    fontSize: '24px',
    lineHeight: '28.8px',
    fontWeight: 700,
  },
  h2: {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 700,
  },
  h3: {
      fontSize: '18px',
      lineHeight: '21.6px',
      fontWeight: 700,
  },
  h4: {
      fontSize: '16px',
      lineHeight: '19.2px',
      fontWeight: 700,
  },
  h5: {
      fontSize: '14px',
      lineHeight: '16.8px',
      fontWeight: 700,
  },
  body1: {
      fontSize: '16px',
      lineHeight: '19.2px',
      fontWeight: 500,
  },
  body2: {
      fontSize: '14px',
      lineHeight: '16.8px',
      fontWeight: 500,
  },
  body3: {
      fontSize: '12px',
      lineHeight: '14.4px',
      fontWeight: 400,
  },
  body4: {
      fontSize: '11px',
      lineHeight: '13.2px',
      fontWeight: 400,
  },
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
  large: '16px',
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
  
export const darkTheme = {
  darkBackground,
  darkBase,
  color,
  typography,
  spacer,
  borderRadius,
  boxShadow,
  zIndex,
}

export const lightTheme = {
  lightBackground,
  lightBase,
  color,
  typography,
  spacer,
  borderRadius,
  boxShadow,
  zIndex,
}