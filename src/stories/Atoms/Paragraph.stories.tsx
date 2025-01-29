import type { Meta, StoryObj } from '@storybook/react';

import Paragraph from '@components/Paragraph/Paragraph';

const meta = {
  title: 'Design System/Paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
  args: {
    children: 'Paragraph',
    required: false,
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
