import type { ComponentPropsWithoutRef } from 'react';
import { badgeStyling, getVariantStyling, getSizeStyling } from './Badge.style';
import type { Size } from '../../types/index';

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  /**
   * Badge의 비주얼 스타일
   *
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary';
  size?: Extract<Size, 'small' | 'large'>;
}

const Badge = ({ size = 'small', variant = 'default', children, ...attributes }: BadgeProps) => (
  <span css={[badgeStyling, getVariantStyling(variant), getSizeStyling(size)]} {...attributes}>
    {children}
  </span>
);

export default Badge;
