import type { BadgeProps } from '../Badge/Badge';
import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { useTheme } from '../../PovProvider'; // 테마 훅 가져오기

export const getVariantStyling = (variant: Required<BadgeProps>['variant']) => {
  const { theme } = useTheme(); // 테마 가져오기

  const style = {
    default: css({
      backgroundColor: theme.color.green100,
      color: theme.color.green600,
    }),
    primary: css({
      backgroundColor: theme.color.green600,
      color: theme.color.green100,
    }),
    secondary: css({
      backgroundColor: theme.faint,
      color: theme.teritary,
    }),
  };

  return style[variant]; // 동적 스타일 반환
};

export const getSizeStyling = (size: Required<BadgeProps>['size']) => {
    const { theme } = useTheme(); // 테마 가져오기
    const style = {
      large: css({
        padding: `10px 12px`,
        fontSize: theme.typography.heading05.fontSize,
        lineHeight: theme.typography.heading05.lineHeight,
        fontWeight: theme.typography.heading05.fontWeight,
      }),
      small: css({
        padding: `6px 8px`,
        fontSize: theme.typography.badge.fontSize,
        lineHeight: theme.typography.badge.lineHeight,
        fontWeight: theme.typography.badge.fontWeight,
      }),
    };
  
    return style[size];
  };


export const badgeStyling = (theme: Theme) =>
  css({
    borderRadius: theme.borderRadius.large,
  });
