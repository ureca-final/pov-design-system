import styled from '@emotion/styled';
import { themes } from '../../styles/Theme';

export const sizes = {
  large: 160,
  medium: 80,
  small: 48,
  tiny: 24,
};

export const Image = styled.div<{ size: keyof typeof sizes; src?: string | null; selected?: boolean }>`
  border-radius: 50%;
  border: ${(props) => (props.selected ? `3px solid ${themes.dark.color.green600}` : 'none')};
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;
  

  height: ${(props) => sizes[props.size]}px;
  width: ${(props) => sizes[props.size]}px;
  line-height: ${(props) => sizes[props.size]}px;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    aspect-ratio: 1/1;
  }

  svg {
    position: relative;
    bottom: -2px;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  path {
    fill: ${themes.dark.color.gray300};
  }
`;