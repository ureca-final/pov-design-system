import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darkTheme } from '../../styles/Theme';

export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

export const Image = styled.div<{ size: keyof typeof sizes; loading: boolean; src?: string | null }>`
  background: ${(props) => (!props.loading ? 'transparent' : darkTheme.color.gray100)};
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${(props) => sizes[props.size]}px;
  width: ${(props) => sizes[props.size]}px;
  line-height: ${(props) => sizes[props.size]}px;

  ${(props) =>
    !props.src &&
    css`
      background: ${!props.loading && '#37D5D3'};
    `}

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  svg {
    position: relative;
    bottom: -2px;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  path {
    fill: ${darkTheme.color.gray300};
  }
`;