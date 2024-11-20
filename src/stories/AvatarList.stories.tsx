import { Meta, StoryFn } from '@storybook/react';

import { AvatarList, AvatarListProps } from '../components/AvatarList/AvatarList';

export default {
  title: 'Design System/AvatarList',
  component: AvatarList,
} as Meta;

const Template: StoryFn<AvatarListProps> = (args) => <AvatarList {...args} />;

export const Short = Template.bind({});
Short.args = {
  users: [
    {
      id: '1',
      name: 'Da Yeon',
      avatarUrl: 'https://avatars.githubusercontent.com/u/93921784?v=4',
    },
    {
      id: '2',
      name: 'Hae Min',
      avatarUrl: 'https://avatars.githubusercontent.com/u/44727850?v=4',
    },
  ],
};

export const Ellipsized = Template.bind({});
Ellipsized.args = {
  users: [
    ...(Short.args.users as AvatarListProps['users']),
    {
      id: '3',
      name: 'Ju Gwang',
      avatarUrl: 'https://avatars.githubusercontent.com/u/90168987?v=4',
    },
    {
      id: '4',
      name: 'Tim Hingston',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709',
    },
  ],
};

export const BigUserCount = Template.bind({});
BigUserCount.args = {
    users: Ellipsized.args.users as AvatarListProps['users'],
    userCount: 100,
};

export const Empty = Template.bind({});
Empty.args = {
  users: [],
};