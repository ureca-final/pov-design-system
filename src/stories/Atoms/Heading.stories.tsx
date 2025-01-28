import { containerStyle, informationStyle } from '@/stories/Atoms/styles';
import type { Meta, StoryObj } from '@storybook/react';
import type { HeadingProps } from '../../components/Heading/Heading';
import Heading from '../../components/Heading/Heading';

const meta = {
  title: 'Design System/Heading',
  component: Heading,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'xLarge', 'xxLarge'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    size: 'medium',
    children: 'Heading',
  },
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

const createHeadingStory = (size: HeadingProps['size']) => ({
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
        <Heading size="small">{children}</Heading>
      </li>
      <li css={informationStyle}>
        <h6>Medium</h6>
        <Heading size="medium">{children}</Heading>
      </li>
      <li css={informationStyle}>
        <h6>Large</h6>
        <Heading size="large">{children}</Heading>
      </li>
      <li css={informationStyle}>
        <h6>X Large</h6>
        <Heading size="xLarge">{children}</Heading>
      </li>
      <li css={informationStyle}>
        <h6>XX Large</h6>
        <Heading size="xxLarge">{children}</Heading>
      </li>
    </>
  ),
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const Small: Story = createHeadingStory('small') as Story;

export const Medium: Story = createHeadingStory('medium') as Story;

export const Large: Story = createHeadingStory('large') as Story;

export const XLarge: Story = createHeadingStory('xLarge') as Story;

export const XXLarge: Story = createHeadingStory('xxLarge') as Story;
