import { css, SerializedStyles } from '@emotion/react';
import { useTheme } from '../../PovProvider'; // 테마 훅 가져오기

export const getVariantStyling = (variant: 'keyword' | 'section', isActive: boolean) => {
  const { theme } = useTheme(); // 테마 가져오기

  const style: { [key in 'keyword' | 'section']: SerializedStyles } = {
    keyword: css({
      backgroundColor: isActive ? theme.color.green100 : theme.color.green100,
      color: isActive ? theme.color.green600 : theme.color.green600,
      borderRadius: theme.borderRadius.large,
    }),
    section: css({
      backgroundColor: isActive ? theme.color.green600 : theme.faint,
      color: isActive ? theme.color.green100 : theme.teritary,
      borderRadius: theme.borderRadius.large,
    }),
  };

  return style[variant] || css({});
};

export const getSizeStyling = (size: 'small' | 'large') => {
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

export const badgeStyling = () =>
  css({
});