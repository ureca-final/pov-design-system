import { css } from '@emotion/react';

import type { InputProps } from './Input';

import { themes } from '../../styles/Theme';
import { useTheme } from '../../PovProvider';

export const inputContainerStyling = css({
  display: 'flex',
  flexDirection: 'column',
  gap: themes.dark.spacer.spacing2,
});

export const inputWrapperStyling = (isError: Required<InputProps>['isError']) => {
  const { theme } = useTheme();

  return css({
    flex: 1,
    width: '100%',
    gap: '12px',
    alignItems: 'center',

    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: themes.dark.borderRadius.medium,

    backgroundColor: isError ? `${theme.backgroundElevated} !important` : 'transparent',

    transition: 'all .2s ease-in',

    '&:focus-within': {
      backgroundColor: isError ? themes.dark.color.red : theme.background,
      boxShadow: isError
        ? `inset 0 0 0 2px ${themes.dark.color.red}`
        : `inset 0 0 0 2px ${themes.dark.color.purple300}`,
    },

    '& svg': {
      width: '16px',
      height: '16px',
    },
  });
};

export const getVariantStyling = (variant: Required<InputProps>['variant']) => {
  const { theme } = useTheme();
  const style = {
    default: css({
      backgroundColor: theme.backgroundElevated,
    }),

    text: css({
      backgroundColor: 'transparent',
    }),
  };

  return style[variant];
};

export const getSizeStyling = (size: Required<InputProps>['size']) => {
  const style = {
    large: css({
      padding: '14px 16px',

      fontSize: themes.dark.typography.heading03.fontSize,
      lineHeight: themes.dark.typography.heading03.lineHeight,
    }),

    medium: css({
      padding: '12px 16px',

      fontSize: themes.dark.typography.heading04.fontSize,
      lineHeight: themes.dark.typography.heading04.lineHeight,
    }),

    small: css({
      padding: '8px 12px',

      fontSize: themes.dark.typography.heading05.fontSize,
      lineHeight: themes.dark.typography.heading05.lineHeight,
    }),
  };

  return style[size];
};

export const getInputStyling = () => {
  const { theme } = useTheme();

  return css({
  width: '100%',
  paddingLeft: 0,
  paddingRight: 0,
  border: 'none',
  borderRadius: themes.dark.borderRadius.small,
  outline: 0,
  color: theme.primary,

  backgroundColor: 'transparent',
  });
};
