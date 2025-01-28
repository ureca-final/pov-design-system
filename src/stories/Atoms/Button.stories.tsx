import { containerStyle, informationStyle } from './styles';
import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from '../../components/Button/Button';
import Button from '../../components/Button/Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button',
    disabled: false,
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
  render: ({ size, children, disabled }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>Primary</h6>
        <Button variant="primary" size={size} disabled={disabled}>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Secondary</h6>
        <Button variant="secondary" size={size} disabled={disabled}>
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
  render: ({ variant, children, disabled }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>Small</h6>
        <Button variant={variant} size="small" disabled={disabled}>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Medium</h6>
        <Button variant={variant} size="medium" disabled={disabled}>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Large</h6>
        <Button variant={variant} size="large" disabled={disabled}>
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

export const Disabled: Story = {
  render: ({ size, variant, children }) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>Disabled Primary</h6>
        <Button variant="primary" size={size} disabled>
          {children}
        </Button>
      </li>
      <li css={informationStyle}>
        <h6>Disabled Secondary</h6>
        <Button variant="secondary" size={size} disabled>
          {children}
        </Button>
      </li>
    </ul>
  ),
  argTypes: {
    disabled: {
      control: false,
    },
  },
};

export const Primary: Story = createButtonStory('primary') as Story;

export const Secondary: Story = createButtonStory('secondary') as Story;
