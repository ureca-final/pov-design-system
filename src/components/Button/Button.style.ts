import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

import type { ButtonProps } from './Button';

export const getVariantStyling = (variant: Required<ButtonProps>['variant']) => {
  const style = {
    primary: css({
      backgroundColor: Theme.color.purple400,

      color: Theme.color.white,

      '&:hover:enabled': {
        backgroundColor: Theme.color.purple500,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${Theme.color.purple500}`,
      },
    }),
    secondary: css({
      backgroundColor: Theme.color.purple200,

      color: Theme.color.purple500,

      '&:hover:enabled': {
        backgroundColor: Theme.color.purple300,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${Theme.color.purple300}`,
      },
    }),
    default: css({
      backgroundColor: Theme.color.gray200,

      color: Theme.color.gray700,

      '&:hover:enabled': {
        backgroundColor: `${Theme.color.gray300}`,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${Theme.color.gray300}`,
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
      fontSize: Theme.typography.h5.fontSize,
      lineHeight: Theme.typography.h5.lineHeight,
    }),
    medium: css({
      width: '200px',
      height: '56px',
      fontSize: Theme.typography.h5.fontSize,
      lineHeight: Theme.typography.h5.lineHeight,
    }),
    small: css({
      width: '120px',
      height: '48px', 
      fontSize: Theme.typography.h5.fontSize,
      lineHeight: Theme.typography.h5.lineHeight,
    }),
  };

  return style[size];
};

export const buttonStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: 'none',
  borderRadius: `${Theme.borderRadius.medium}`,
  outline: `0 solid ${Theme.color.white}`,

  backgroundColor: Theme.color.white,

  fontWeight: 600,

  transition: 'all .2s ease-in',

  cursor: 'pointer',

  '&:focus': {
    outlineWidth: '1px',
  },

  '&:disabled': {
    opacity: '.4',
  },
});
