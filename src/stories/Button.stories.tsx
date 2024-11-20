import { containerStyle, informationStyle } from '../stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from '../components/Button/Button';
import Button from '../components/Button/Button';

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'primary', 'secondary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const createButtonStory = (variant: ButtonProps['variant']) => ({
  args: {
    variant,
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
});

export const Playground: Story = {};

export const Variants: Story = {
  render: ({ size, children }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>Default</h6>
        <Button variant='default' size={size}>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Primary</h6>
        <Button variant='primary' size={size}>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Secondary</h6>
        <Button variant='secondary' size={size}>
          {children}
        </Button>
      </li>
    </ul>
  ),
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Sizes: Story = {
  render: ({ variant, children }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>Small</h6>
        <Button variant={variant} size='small'>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Medium</h6>
        <Button variant={variant} size='medium'>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Large</h6>
        <Button variant={variant} size='large'>
          {children}
        </Button>
      </li>
    </ul>
  ),
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const Default: Story = createButtonStory('default') as Story;

export const Primary: Story = createButtonStory('primary') as Story;

export const Secondary: Story = createButtonStory('secondary') as Story;
