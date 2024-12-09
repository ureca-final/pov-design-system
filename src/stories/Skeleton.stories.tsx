import { containerStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from '@components/Skeleton/Skeleton';

const meta = {
  title: 'Design System/Skeleton',
  component: Skeleton,
  args: {
    width: '500px',
    height: '24px',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  argTypes: {
    width: { control: false },
    height: { control: false },
    variant: { control: false },
  },
};

export const Image: Story = {
  args: {
    width: '168px',
    height: '260px',
    variant: "square"
  },
};

export const Paragraph: Story = {
  args: {
    width: '744px',
    height: '183px',
  },
};

export const Circle: Story = {
  args: {
    width: '80px',
    variant: 'circle',
  },
  argTypes: {
    variant: { control: false },
  },
};

export const Combination: Story = {
  render: () => (
      <div css={containerStyle}>
        <Skeleton variant="circle" width="100px" />
        <Skeleton width="300px" height="100px" />
        <Skeleton />
        <Skeleton />
      </div>
    ),
  argTypes: {
    variant: { control: false },
    width: { control: false },
    height: { control: false },
  },
};
