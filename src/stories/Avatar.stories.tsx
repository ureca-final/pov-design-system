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
    src: 'https://bucket-uplus-127.s3.ap-northeast-2.amazonaws.com/clubs/6aec1416-2cb2-4afe-add3-b72df87b3023/profile/d5789b7b-6b7b-4cb7-9b15-9b7e570ed7a5.png',
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

export const Circle: Story = {
  render: () => (
    <>
      <Avatar
        size="medium"
        username="Da Yeon"
        src="https://avatars.githubusercontent.com/u/93921784?v=4"
        selected={true}
      />
    </>
  ),
};
