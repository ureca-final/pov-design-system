import { css } from '@emotion/react';
import { useTheme } from '../../PovProvider'; // 테마 훅 가져오기

import { themes } from '../../styles/Theme';

export type TabSelectedStylingProps = 'outline' | 'block';

export const tabStyling = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  minWidth: 'max-content',

  fontSize: themes.dark.typography.heading04.fontSize,
  lineHeight: themes.dark.typography.heading04.lineHeight,
  fontWeight: themes.dark.typography.heading04.fontWeight,

  transition: 'all .2s ease-in',

  cursor: 'pointer',
});

export const getVariantStyling = (variant: TabSelectedStylingProps, isSelected: boolean) => {
  const { theme } = useTheme(); // 테마 가져오기
  const style = {
    outline: css({
      color: isSelected ? themes.dark.primary : themes.dark.muted,

      '&:hover': {
        color: isSelected ? themes.dark.secondary : themes.dark.teritary,
      },
    }),

    block: css({
      border: 'none',

      backgroundColor: isSelected ? themes.dark.color.green600 : theme.background,

      color: isSelected ? themes.dark.color.white : themes.dark.color.gray500,

      '&:hover': {
        color: isSelected ? themes.dark.color.white : themes.dark.color.gray600,
      },
    }),
  };

  return style[variant];
};
