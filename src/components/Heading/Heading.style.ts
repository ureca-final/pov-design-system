import { css } from '@emotion/react';

import type { HeadingProps } from './Heading';

import { themes } from '../../styles/Theme';

export const getSizeStyling = (size: Required<HeadingProps>['size']) => {
  const style = {
    xxLarge: css({
      fontSize: themes.dark.typography.heading01.fontSize,
      lineHeight: themes.dark.typography.heading01.lineHeight,
      fontWeight: themes.dark.typography.heading01.fontWeight,
    }),
    xLarge: css({
      fontSize: themes.dark.typography.heading02.fontSize,
      lineHeight: themes.dark.typography.heading02.lineHeight,
      fontWeight: themes.dark.typography.heading02.fontWeight,
    }),
    large: css({
      fontSize: themes.dark.typography.heading03.fontSize,
      lineHeight: themes.dark.typography.heading03.lineHeight,
      fontWeight: themes.dark.typography.heading03.fontWeight,
    }),
    medium: css({
      fontSize: themes.dark.typography.heading04.fontSize,
      lineHeight: themes.dark.typography.heading04.lineHeight,
      fontWeight: themes.dark.typography.heading04.fontWeight,
    }),
    small: css({
      fontSize: themes.dark.typography.heading05.fontSize,
      lineHeight: themes.dark.typography.heading05.lineHeight,
      fontWeight: themes.dark.typography.heading05.fontWeight,
    }),
  };

  return style[size];
};
