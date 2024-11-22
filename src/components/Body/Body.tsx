type Size = keyof typeof TAG_BY_SIZE;
import type { ComponentPropsWithoutRef } from 'react';

import { getSizeStyling } from './Body.style';

export interface BodyProps extends ComponentPropsWithoutRef<'h4'> {
  size?: Size;
}

const TAG_BY_SIZE = {
  xLarge: 'h1',
  large: 'h2',
  medium: 'h3',
  small: 'h4',
} as const;

const Body = ({ size = 'medium', children, ...attributes }: BodyProps) => {
  const BodyTag = TAG_BY_SIZE[size];

  return (
    <BodyTag css={getSizeStyling(size)} {...attributes}>
      {children}
    </BodyTag>
  );
};

export default Body;
