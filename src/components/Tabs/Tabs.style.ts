import { css } from '@emotion/react';

import { themes } from '../../styles/Theme';

export const containerStyling = css({
  display: 'flex',

  width: 'max-content',

  overflowX: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
