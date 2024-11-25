import { css } from '@emotion/react';

import { themes } from '../../styles/Theme';

export const getToggleStyling = (isSelected: boolean) => css({
  width: '50px',
  height: '26px',
  display: 'flex',
  alignItems: 'center',
  padding: '4px',
  borderRadius: '20px',
  backgroundColor: isSelected ? themes.dark.color.green600 : themes.dark.color.gray400,
  transition: `0.2s ease-in`,
  cursor: 'pointer',
  position: 'relative',
});

export const toggleCircleStyle = (isSelected: boolean) => css({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: themes.dark.color.white,
  position: 'absolute',
  transition: `transform 0.2s ease-in`,
  transform: isSelected ? 'translateX(24px)' : 'translateX(0)',
});
