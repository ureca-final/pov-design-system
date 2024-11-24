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

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: keyof typeof icons;
  block?: boolean;
}

export const Icon: React.FC<IconProps> = ({ icon, block = false, ...props }) => {
  return (
    <Svg
      viewBox="0 0 17 17"
      width="16px"
      height="17px"
      block={block}
      {...props}
    >
      <Path d={icons[icon]} />
    </Svg>
  );
};

export default Icon;
