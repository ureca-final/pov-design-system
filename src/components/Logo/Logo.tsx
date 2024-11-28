import React from 'react';
import styled from '@emotion/styled';
import { characters } from '../../assets/characters';

const Svg = styled.svg<{ block?: boolean; color?: string }>`
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
  fill: ${(props) => props.color || 'currentColor'};
`;

const Path = styled.path`
  fill: currentColor;
`;

export interface CharacterProps extends React.SVGProps<SVGSVGElement> {
  icon: keyof typeof characters;
  block?: boolean;
  color?: string; 
}

export const Logo: React.FC<CharacterProps> = ({ icon, block = false, color, ...props }) => {
  const iconData = characters[icon];
  if (React.isValidElement(iconData)) {
    return React.cloneElement(iconData, {
      ...props,
    });
  }

  // 예외 처리: icon이 정의되지 않은 경우
  console.warn(`Icon "${icon}" not found in icons object.`);
  return null;
};

export default Logo;