import { css } from '@emotion/react';

import { darkTheme } from './Theme';

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
    color: darkTheme.color.gray700,
  },

  a: {
    textDecoration: 'none',
    color: darkTheme.color.purple600,
  },
});
