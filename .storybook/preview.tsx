import React from 'react';
import type { Preview } from '@storybook/react';
import { PovProvider } from '../src/PovProvider';

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
    <PovProvider>
      <Story />
    </PovProvider>
  ),
];

export default preview;
