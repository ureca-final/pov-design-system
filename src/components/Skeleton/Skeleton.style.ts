import { css, keyframes } from '@emotion/react';

import { themes } from '../../styles/Theme';

const skeletonAnimation = keyframes`
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

export const getSkeletonStyling = (width: string, height: string, variant: 'square' | 'circle') => css({
    width,
    height: variant === 'square' ? height : width,
    borderRadius: variant === 'square' ? themes.dark.spacer.spacing2 : '50%',

    background: `linear-gradient(-90deg,${themes.dark.color.gray100}, ${themes.dark.color.gray200}, ${themes.dark.color.gray100}, ${themes.dark.color.gray300})`,
    backgroundSize: '400%',

    animation: `${skeletonAnimation} 2s infinite ease-out`,
  });
