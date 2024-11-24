import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef, useCallback, useState } from 'react';

import { checkboxStyling, inputStyling } from './Checkbox.style';

export interface CheckboxProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  isChecked?: boolean;
}

const Checkbox = (
  { id, label = '', isChecked = false, ...attributes }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <label css={checkboxStyling} htmlFor={id}>
      <input
        css={inputStyling}
        id={id}
        checked={checked}
        type="checkbox"
        {...attributes}
        ref={ref}
      />
      {checked ? (
        <img src="/assets/checked-icon.svg" alt="Checked Icon" onClick={handleChecked} style={{ maxWidth: '20px', maxHeight: '20px' }} />
      ) : (
        <img src="/assets/unchecked-icon.svg" alt="unChecked Icon" onClick={handleChecked} style={{ maxWidth: '20px', maxHeight: '20px' }} />
      )}
      {label && <span>{label}</span>}
    </label>
  );
};

export default forwardRef(Checkbox);
