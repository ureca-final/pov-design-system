import React from 'react';
import type { Preview } from '@storybook/react';
import { Global, ThemeProvider } from '@emotion/react';

import { GlobalStyle, TypeofTheme } from '../src/styles/GlobalStyle';
import { themes } from '../src/styles/Theme';

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
const theme = localStorage.getItem("theme") as TypeofTheme;
export const decorators = [
  (Story) => (
    <ThemeProvider theme={themes.dark}>
      <Global styles={GlobalStyle(theme)} />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
