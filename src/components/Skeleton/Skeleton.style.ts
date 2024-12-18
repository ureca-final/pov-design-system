import { css, keyframes } from '@emotion/react';

import { themes } from '../../styles/Theme';

export const skeletonAnimation = keyframes`
 0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const getSkeletonStyling = (width: string, height: string, variant: 'square' | 'circle') =>
  css({
    width,
    height: variant === 'square' ? height : width,
    borderRadius: variant === 'square' ? themes.dark.spacer.spacing2 : '50%',

    background: `linear-gradient(-90deg, ${themes.dark.faint}, ${themes.dark.muted}, ${themes.dark.faint}, ${themes.dark.backgroundElevated})`,
    backgroundSize: '400%',

    animation: `${skeletonAnimation} 3s infinite ease-out`,
  });
