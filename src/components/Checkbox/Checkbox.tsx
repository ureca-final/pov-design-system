import Icon from '../Icon/Icon';
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

  const handleToggle = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  return (
    <label css={checkboxStyling} htmlFor={id}>
      <input
        css={inputStyling}
        id={id}
        checked={checked}
        type="checkbox"
        {...attributes}
        ref={ref}
        onChange={handleToggle}
      />
      {checked ? (
        <Icon icon="checked" onClick={handleToggle} />
      ) : (
        <Icon icon="unchecked" onClick={handleToggle} />
      )}
      {label && <span>{label}</span>}
    </label>
  );
};

export default forwardRef(Checkbox);