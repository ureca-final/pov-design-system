import type { Size } from '../../types/index';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import {
  buttonStyling,
  getSizeStyling,
  getVariantStyling,
} from '../../components/Button/Button.style';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  variant?: 'primary' | 'secondary';
}

const Button = (
  {
    size = 'medium',
    variant = 'primary',
    children,
    ...attributes
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <button
      ref={ref}
      css={[buttonStyling, getVariantStyling(variant), getSizeStyling(size)]}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
