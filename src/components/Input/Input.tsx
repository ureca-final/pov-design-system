import type { Size } from '../../types/index';
import type { ComponentPropsWithRef, ForwardedRef, ReactElement } from 'react';
import { forwardRef, useEffect, useRef } from 'react';

import { getInputStyling, getSizeStyling, getVariantStyling, inputContainerStyling, inputWrapperStyling } from './Input.style';
import Label from '../Label/Label';
import SupportingText from '../SupportingText/SupportingText';

export interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  label?: string;
  variant?: 'default' | 'text';
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  isError?: boolean;
  icon?: ReactElement;
  supportingText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, variant = 'default', size = 'medium', isError = false, icon, supportingText, ...attributes }: InputProps, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    // isError, supportingText가 변경될 때에도 focus를 유지
    useEffect(() => {
      if (inputRef.current && document.activeElement === inputRef.current) {
        inputRef.current.focus();
      }
    }, [isError, supportingText]);

    return (
      <div css={inputContainerStyling}>
        {label && (
          <Label id={attributes.id} required={attributes.required}>
            {label}
          </Label>
        )}
        <div css={[getSizeStyling(size), inputWrapperStyling(isError), getVariantStyling(variant)]}>
          {icon}
          {/* ref를 병합하여 전달 */}
          <input
            ref={(el) => {
              inputRef.current = el; // 내부 참조 업데이트
              if (typeof ref === 'function') {
                ref(el); // forwardRef로 전달된 ref 호출
              } else if (ref) {
                (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
              }
            }}
            css={[getSizeStyling(size), getInputStyling]}
            {...attributes}
          />
        </div>
        {supportingText && <SupportingText isError={isError}>{supportingText}</SupportingText>}
      </div>
    );
  }
);

export default Input;
