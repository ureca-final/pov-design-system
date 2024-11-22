import { css } from '@emotion/react';

import type { BodyProps } from './Body';

import { themes } from '../../styles/Theme';

export const getSizeStyling = (size: Required<BodyProps>['size']) => {
  const style = {
    xLarge: css({
      fontSize: themes.dark.typography.body01.fontSize,
      lineHeight: themes.dark.typography.body01.lineHeight,
      fontWeight: themes.dark.typography.body01.fontWeight,
    }),
    large: css({
      fontSize: themes.dark.typography.body02.fontSize,
      lineHeight: themes.dark.typography.body02.lineHeight,
      fontWeight: themes.dark.typography.body02.fontWeight,
    }),
    medium: css({
      fontSize: themes.dark.typography.body03.fontSize,
      lineHeight: themes.dark.typography.body03.lineHeight,
      fontWeight: themes.dark.typography.body03.fontWeight,
    }),
    small: css({
      fontSize: themes.dark.typography.body04.fontSize,
      lineHeight: themes.dark.typography.body04.lineHeight,
      fontWeight: themes.dark.typography.body04.fontWeight,
    }),
  };

  return style[size];
};
