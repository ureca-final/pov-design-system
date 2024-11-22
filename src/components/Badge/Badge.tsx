import type { ComponentPropsWithoutRef } from 'react';

import { badgeStyling, getVariantStyling } from './Badge.style';

export interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Badge의 비주얼 스타일
   *
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary';
}

const Badge = ({ variant = 'default', children, ...attributes }: BadgeProps) => (
  <span css={[badgeStyling, getVariantStyling(variant)]} {...attributes}>
    {children}
  </span>
);

export default Badge;
