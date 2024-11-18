import { css } from '@emotion/react';

import { Theme } from './Theme';

export const GlobalStyle = css({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  'ul, ol, li': {
    listStyle: 'none',
  },

  'html, body': {
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Pretendard'`,
    fontSize: '16px',
    color: Theme.color.gray700,
  },

  a: {
    textDecoration: 'none',
    color: Theme.color.purple600,
  },
});
