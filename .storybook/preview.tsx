import React from 'react';
import type { Preview } from '@storybook/react';
import { Global, ThemeProvider } from '@emotion/react';

import { GlobalStyle } from '../src/styles/GlobalStyle';
import { Theme } from '../src/styles/Theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    ally: {
      element: '#root',
      manual: false,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
