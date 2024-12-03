import { css } from '@emotion/react';

import type { ToastProps } from './Toast';

import { themes } from '../../styles/Theme';
import { fadeIn, fadeOut, moveUp } from '../../styles/animation';

export const getVariantStyling = (variant: Required<ToastProps>['variant']) => {
  const style = {
    default: css({
      backgroundColor: themes.dark.color.purple500,
    }),
    success: css({
      backgroundColor: themes.dark.color.green600,
    }),
    error: css({
      backgroundColor:themes.dark.color.red,
    }),
  };

  return style[variant];
};

export const getToastStyling = (isVisible: boolean) => css({
    bottom: themes.dark.spacer.spacing6,
    display: 'flex',
    justifyContent: 'space-between',
    gap: themes.dark.spacer.spacing4,
    alignItems: 'center',

    minWidth: '300px',
    padding: `14px ${themes.dark.spacer.spacing3}`,
    borderRadius: themes.dark.borderRadius.small,

    boxShadow: themes.dark.boxShadow.shadow9,

    color: themes.dark.color.white,

    animation: isVisible
      ? `${fadeIn} 0.2s ease-in, ${moveUp} 0.2s ease-in`
      : `${fadeOut} 0.2s ease-in forwards`,

    '& > svg': {
      width: '16px',
      height: '16px',

      '& path': {
        stroke: themes.dark.color.white,
      },
    },
  });

export const contentStyling = css({
  display: 'flex',
  gap: themes.dark.spacer.spacing2,
  alignItems: 'center',

  fontSize: themes.dark.typography.body03.fontSize,
  lineHeight: themes.dark.typography.body03.lineHeight,
  fontWeight: themes.dark.typography.body03.fontWeight,
});

export const closeIconStyling = css({
  cursor: 'pointer',
});
