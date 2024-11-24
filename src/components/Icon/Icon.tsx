import React from 'react';
import styled from '@emotion/styled';
import { icons } from '../../assets/icons';

const Svg = styled.svg<{ block?: boolean }>`
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
  fill: currentColor;
`;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: keyof typeof icons;
  block?: boolean;
}

export const Icon: React.FC<IconProps> = ({ icon, block = false, ...props }) => {
  const iconData = icons[icon];

  if (typeof iconData === 'string') {
    // path string인 경우
    return (
      <Svg
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        block={block}
        {...props}
      >
        <Path d={iconData} />
      </Svg>
    );
  }

  if (React.isValidElement(iconData)) {
    // JSX.Element인 경우
    return React.cloneElement(iconData, {
      width: '24px',
      height: '24px',
      ...props,
    });
  }

  // 예외 처리: icon이 정의되지 않은 경우
  console.warn(`Icon "${icon}" not found in icons object.`);
  return null;
};

export default Icon;
