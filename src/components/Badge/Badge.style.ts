import { css } from '@emotion/react';

import type { BadgeProps } from '@components/Badge/Badge';

import { themes } from '../../styles/Theme';

export const getVariantStyling = (variant: Required<BadgeProps>['variant']) => {
  const style = {
    default: css({
      backgroundColor: themes.dark.color.green100,
      color: themes.dark.color.green600,
    }),
    primary: css({
      backgroundColor: themes.dark.color.green600,
      color: themes.dark.color.green100,
    }),
    secondary: css({
      backgroundColor: themes.dark.faint,
      color: themes.dark.teritary,
    }),
  };

  return style[variant];
};

export const badgeStyling = css({
  padding: `4px 10px`,
  borderRadius: themes.dark.borderRadius.large,

  fontSize: themes.dark.typography.badge.fontSize,
  lineHeight: themes.dark.typography.badge.lineHeight,
  fontWeight: themes.dark.typography.badge.fontWeight,
});
