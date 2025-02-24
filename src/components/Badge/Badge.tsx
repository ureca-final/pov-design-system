import React from 'react';
import { badgeStyling, getVariantStyling, getSizeStyling } from './Badge.style';
import type { ComponentPropsWithoutRef } from 'react';

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  variant: 'keyword' | 'section';
  size?: 'small' | 'large';
  cancel?: boolean;
  click?: boolean;
}

const Badge = ({ variant, size = 'small', cancel = false, click = false, children, ...attributes }: BadgeProps) => {
  const isActive = variant === 'keyword' ? cancel : click;

  // children 값 확인 및 안전한 처리
  if (typeof children !== 'string' && typeof children !== 'number' && !React.isValidElement(children)) {
    console.error('Invalid children passed to Badge:', children);
    return null; // 잘못된 children이 전달되었을 경우 null 반환
  }

  return (
    <span css={[badgeStyling, getVariantStyling(variant, isActive), getSizeStyling(size)]} {...attributes}>
      {variant === 'keyword' && isActive ? (
        <>
          <span style={{ marginLeft: '4px' }}># </span>
          {children}
        </>
      ) : (
        children
      )}
    </span>
  );
};

export default Badge;
