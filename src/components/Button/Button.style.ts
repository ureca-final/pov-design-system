import { css } from '@emotion/react';

import { darkTheme } from '../../styles/Theme';

import type { ButtonProps } from './Button';

export const getVariantStyling = (variant: Required<ButtonProps>['variant']) => {
  const style = {
    primary: css({
      backgroundColor: darkTheme.color.purple400,

      color: darkTheme.color.white,

      '&:hover:enabled': {
        backgroundColor: darkTheme.color.purple500,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${darkTheme.color.purple500}`,
      },
    }),
    secondary: css({
      backgroundColor: darkTheme.color.purple200,

      color: darkTheme.color.purple500,

      '&:hover:enabled': {
        backgroundColor: darkTheme.color.purple300,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${darkTheme.color.purple300}`,
      },
    }),
    default: css({
      backgroundColor: darkTheme.color.gray200,

      color: darkTheme.color.gray700,

      '&:hover:enabled': {
        backgroundColor: `${darkTheme.color.gray300}`,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${darkTheme.color.gray300}`,
      },
    }),
  };

  return style[variant];
};

export const getSizeStyling = (size: Required<ButtonProps>['size']) => {
  const style = {
    large: css({
      width: '320px',
      height: '56px',
      fontSize: darkTheme.typography.h5.fontSize,
      lineHeight: darkTheme.typography.h5.lineHeight,
    }),
    medium: css({
      width: '200px',
      height: '56px',
      fontSize: darkTheme.typography.h5.fontSize,
      lineHeight: darkTheme.typography.h5.lineHeight,
    }),
    small: css({
      width: '120px',
      height: '48px', 
      fontSize: darkTheme.typography.h5.fontSize,
      lineHeight: darkTheme.typography.h5.lineHeight,
    }),
  };

  return style[size];
};

export const buttonStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: 'none',
  borderRadius: `${darkTheme.borderRadius.medium}`,
  outline: `0 solid ${darkTheme.color.white}`,

  backgroundColor: darkTheme.color.white,

  fontWeight: 500,

  transition: 'all .2s ease-in',

  cursor: 'pointer',

  '&:focus': {
    outlineWidth: '1px',
  },

  '&:disabled': {
    opacity: '.4',
  },
});
