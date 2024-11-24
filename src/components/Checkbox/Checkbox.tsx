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
        <Icon icon="checked" onClick={handleChecked}/>
      ) : (
        <Icon icon="unchecked" onClick={handleChecked}/>
      )}
      {label && <span>{label}</span>}
    </label>
  );
};

export default forwardRef(Checkbox);