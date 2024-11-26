import type { ComponentPropsWithoutRef } from 'react';

import { getTextStyling } from './SupportingText.style';

export interface SupportingTextProps extends ComponentPropsWithoutRef<'span'> {
  isError?: boolean;
}

const SupportingText = ({ isError = false, children, ...attributes }: SupportingTextProps) => (
    <span css={getTextStyling(isError)} {...attributes}>
      {children}
    </span>
  );

export default SupportingText;
