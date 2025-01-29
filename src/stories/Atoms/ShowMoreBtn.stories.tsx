import type { Meta, StoryObj } from '@storybook/react';

import ShowMoreBtn from '@components/ShowMoreBtn/ShowMoreBtn';

const meta = {
  title: 'Design System/ShowMoreBtn',
  component: ShowMoreBtn,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    children: 'ShowMoreBtn',
  },
} satisfies Meta<typeof ShowMoreBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
