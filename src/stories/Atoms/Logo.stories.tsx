import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Logo, CharacterProps } from '../../components/Logo/Logo';
import { characters } from '../../assets/characters';
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
  title: 'Design System/Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Labels = {
  render: (): JSX.Element => (
    <>
      There are {Object.keys(characters).length} icons
      <List>
        {Object.keys(characters).map((key) => (
          <Item key={key}>
            <Logo icon={key as keyof typeof characters} aria-hidden />
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
      {Object.keys(characters).map((key) => (
        <Item minimal key={key}>
          <Logo icon={key as keyof typeof characters} />
        </Item>
      ))}
    </List>
  ),
};

interface StoryArgs extends CharacterProps {
  'aria-label'?: string;
}

export const Inline = {
  render: (args: StoryArgs): JSX.Element => (
    <>
      this is an inline <Logo {...args} /> icon (default)
    </>
  ),
  args: {
    icon: 'logo',
    'aria-label': 'Heart',
  },
};

export const Block = {
  render: (args: StoryArgs): JSX.Element => (
    <>
      this is a block <Logo {...args} /> icon
    </>
  ),
  args: {
    icon: 'logo',
    'aria-label': 'Heart',
    block: true,
  },
};
