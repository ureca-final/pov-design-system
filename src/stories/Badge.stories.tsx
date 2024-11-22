import { containerStyle, informationStyle } from './styles';
import type { Meta, StoryObj } from '@storybook/react';

import Badge from '../components/Badge/Badge';

const meta = {
  title: 'Design System/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'primary', 'outline'],
      description: 'Badge의 비주얼 스타일',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'large'],
    },
    children: {
      control: { type: 'text' },
      description: 'Badge에 표시할 내용',
    },
  },
  args: {
    variant: 'default',
    size: 'small',
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: ({ children }) => (
      <ul css={containerStyle}>
        <li css={informationStyle}>
          <h6>Default</h6>
          <Badge variant="default">{children}</Badge>
        </li>
        <li css={informationStyle}>
          <h6>Primary</h6>
          <Badge variant="primary">{children}</Badge>
        </li>
        <li css={informationStyle}>
          <h6>Secondary</h6>
          <Badge variant="secondary">{children}</Badge>
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
        <Badge variant={variant} size='small'>
          {children}
        </Badge>
      </li>
      <li css={informationStyle}>
        <h6>Large</h6>
        <Badge variant={variant} size='large'>
          {children}
        </Badge>
      </li>
    </ul>
  ),
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const Default: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};
