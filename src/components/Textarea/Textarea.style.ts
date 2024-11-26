import { css } from '@emotion/react';

import type { TextareaProps } from './Textarea';

import { themes } from '../../styles/Theme';
import { useTheme } from '../../PovProvider';

export const textareaContainerStyling = css({
  display: 'flex',
  flexDirection: 'column',
  gap: themes.dark.spacer.spacing2,
});

export const getSizeStyling = (size: Required<TextareaProps>['size']) => {
  const style = {
    large: css({
      padding: '14px 16px',

      fontSize: themes.dark.typography.body02.fontSize,
      lineHeight: themes.dark.typography.body02.lineHeight,
      fontWeight: themes.dark.typography.body02.fontWeight,
    }),

    medium: css({
      padding: '12px 16px',

      fontSize: themes.dark.typography.body03.fontSize,
      lineHeight: themes.dark.typography.body03.lineHeight,
      fontWeight: themes.dark.typography.body03.fontWeight,
    }),

    small: css({
      padding: '8px 12px',

      fontSize: themes.dark.typography.body04.fontSize,
      lineHeight: themes.dark.typography.body04.lineHeight,
      fontWeight: themes.dark.typography.body04.fontWeight,
    }),
  };

  return style[size];
};

export const getTextareaStyling = (isError: Required<TextareaProps>['isError']) => {
  const { theme } = useTheme();

  return css({
    width: '100%',
    padding: 0,
    border: 'none',
    borderRadius: themes.dark.borderRadius.small,
    outline: 0,

    backgroundColor: isError ? `${themes.dark.color.red}` : theme.backgroundElevated,

    transition: 'all .2s ease-in',

    '&:focus-within': {
      backgroundColor: isError ? themes.dark.color.red : theme.muted,
      boxShadow: isError ? `0 0 0 1px ${themes.dark.color.red}` : `0 0 0 1px ${themes.dark.color.gray300}`,
    },
  });
  };