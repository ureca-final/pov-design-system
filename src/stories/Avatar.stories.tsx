import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../components/Avatar/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Standard: Story = {
  args: {
    size: 'large',
    username: 'Da Yeon',
    src: 'https://avatars.githubusercontent.com/u/93921784?v=4',
  },
};

export const Sizes: Story = {
  args: {
    username: 'Da Yeon',
    src: 'https://avatars.githubusercontent.com/u/93921784?v=4',
  },
  render: (args) => (
    <>
      <Avatar {...args} size="large" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="small" />
      <Avatar {...args} size="tiny" />
    </>
  ),
};

export const Large: Story = {
  render: () => (
    <>
      <Avatar
        size="large"
        username="Da Yeon"
        src="https://avatars.githubusercontent.com/u/93921784?v=4"
      />
    </>
  ),
};
