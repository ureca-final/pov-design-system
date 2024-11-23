import { containerStyle, informationStyle } from './styles';
import Badge from '../components/Badge/Badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['keyword', 'section'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'large'],
    },
    cancel: {
      control: { type: 'boolean' },
      description: 'keyword/isNotCancel 상태의 활성 여부',
    },
    click: {
      control: { type: 'boolean' },
      description: 'section/isNotClicked 상태의 활성 여부',
    },
  },
  args: {
    variant: 'keyword',
    size: 'small',
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: ({children}) => (
    <ul css={containerStyle}>
      <li css={informationStyle}>
        <h6>keyword</h6>
        <Badge variant="keyword" cancel={true}>
          {children}
        </Badge>
        <Badge variant="keyword" cancel={false}>
          {children}
        </Badge>
      </li>
      <li css={informationStyle}>
        <h6>section</h6>
        <Badge variant="section" click={true}>
          {children}
        </Badge>
        <Badge variant="section" click={false}>
          {children}
        </Badge>
      </li>
    </ul>
  ),
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

export const keyword: Story = {
  args: {
    variant: 'keyword',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const section: Story = {
  args: {
    variant: 'section',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};
