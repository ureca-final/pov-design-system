import type { Size } from '../../types/index';
import type { ComponentPropsWithoutRef } from 'react';

import { getSizeStyling } from './Body.style';

export interface BodyProps extends ComponentPropsWithoutRef<'h4'> {
  size?: Extract<Size, 'small' | 'medium' | 'large' | 'xLarge'>;
}

const Body = ({ size = 'medium', children, ...attributes }: BodyProps) => {
  return (
    <p css={getSizeStyling(size)} {...attributes}>
      {children}
    </p>
  );
};

export default Body;
