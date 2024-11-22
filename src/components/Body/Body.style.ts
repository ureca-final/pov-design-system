import { css } from '@emotion/react';

import type { BodyProps } from './Body';

import { themes } from '../../styles/Theme';

export const getSizeStyling = (size: Required<BodyProps>['size']) => {
  const style = {
    xLarge: css({
      fontSize: themes.dark.typography.body01.fontSize,
      lineHeight: themes.dark.typography.body01.lineHeight,
    }),
    large: css({
      fontSize: themes.dark.typography.body02.fontSize,
      lineHeight: themes.dark.typography.body02.lineHeight,
    }),
    medium: css({
      fontSize: themes.dark.typography.body03.fontSize,
      lineHeight: themes.dark.typography.body03.lineHeight,
    }),
    small: css({
      fontSize: themes.dark.typography.body04.fontSize,
      lineHeight: themes.dark.typography.body04.lineHeight,
    }),
  };

  return style[size];
};
