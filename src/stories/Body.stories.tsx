import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import type { BodyProps } from '../components/Body/Body';
import Body from '../components/Body/Body';

const meta = {
  title: 'Design System/Body',
  component: Body,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'xLarge'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    size: 'medium',
    children: 'Body',
  },
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof meta>;

const createBodyStory = (size: BodyProps['size']) => ({
  args: {
    size,
  },
  argTypes: {
    size: {
      control: false,
    },
  },
});

export const Playground: Story = {};

export const Sizes: Story = {
  render: ({ children }) => (
      <>
        <li css={informationStyle}>
          <h6>Small</h6>
          <Body size="small">{children}</Body>
        </li>
        <li css={informationStyle}>
          <h6>Medium</h6>
          <Body size="medium">{children}</Body>
        </li>
        <li css={informationStyle}>
          <h6>Large</h6>
          <Body size="large">{children}</Body>
        </li>
        <li css={informationStyle}>
          <h6>X Large</h6>
          <Body size="xLarge">{children}</Body>
        </li>
      </>
    ),
  argTypes: {
    size: {
      control: false,
    },
  },
};


export const Small: Story = createBodyStory('small') as Story;

export const Medium: Story = createBodyStory('medium') as Story;

export const Large: Story = createBodyStory('large') as Story;

export const XLarge: Story = createBodyStory('xLarge') as Story;;