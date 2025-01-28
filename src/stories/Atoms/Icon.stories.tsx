import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icon, IconProps } from '../../components/Icon/Icon';
import { icons } from '../../assets/icons';
import type { Meta, StoryObj } from '@storybook/react';

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li<{ minimal?: boolean }>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  ${(props) =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

const meta = {
  title: 'Design System/Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Labels = {
  render: (): JSX.Element => (
    <>
      There are {Object.keys(icons).length} icons
      <List>
        {Object.keys(icons).map((key) => (
          <Item key={key}>
            <Icon icon={key as keyof typeof icons} aria-hidden />
            <Meta>{key}</Meta>
          </Item>
        ))}
      </List>
    </>
  ),
};

export const NoLabels = {
  name: 'no labels',
  render: (): JSX.Element => (
    <List>
      {Object.keys(icons).map((key) => (
        <Item minimal key={key}>
          <Icon icon={key as keyof typeof icons} />
        </Item>
      ))}
    </List>
  ),
};

interface StoryArgs extends IconProps {
  'aria-label'?: string;
}

export const Color: StoryObj<typeof Icon> = {
  render: (args) => (
    <List>
      <Item>
        <Icon color="red" {...args} />
        <span>Red</span>
      </Item>
      <Item>
        <Icon color="#1BD27D" {...args} />
        <span>Accent color</span>
      </Item>
    </List>
  ),
  args: {
    icon: 'heartfill',
    'aria-label': 'Heart',
  },
};

export const Inline = {
  render: (args: StoryArgs): JSX.Element => (
    <>
      this is an inline <Icon {...args} /> icon (default)
    </>
  ),
  args: {
    icon: 'heartfill',
    'aria-label': 'Heart',
  },
};

export const Block = {
  render: (args: StoryArgs): JSX.Element => (
    <>
      this is a block <Icon {...args} /> icon
    </>
  ),
  args: {
    icon: 'heartfill',
    'aria-label': 'Heart',
    block: true,
  },
};
