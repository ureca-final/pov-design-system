import { badgeStyling, getVariantStyling, getSizeStyling } from './Badge.style';
import type { ComponentPropsWithoutRef } from 'react';

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  variant: 'keyword' | 'section';
  size?: 'small' | 'large';
  cancel?: boolean;
  click?: boolean;
}

const Badge = ({
  variant,
  size = 'small',
  cancel = false,
  click = false,
  children,
  ...attributes
}: BadgeProps) => {
  // 상태 기반으로 isActive 값 결정
  const isActive = variant === 'keyword' ? cancel : click;

  return (
    <span css={[badgeStyling, getVariantStyling(variant, isActive), getSizeStyling(size)]} {...attributes}>
    {variant === 'keyword' && isActive ? (
      <>
        <span style={{ marginLeft: '4px' }}>× </span>
        {children}
      </>
    ) : (
      children
    )}
  </span>
  );
};

export default Badge;
