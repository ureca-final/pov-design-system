import type { ComponentPropsWithoutRef } from 'react';
import { getStyling } from './Paragraph.style'

export interface ParagraphProps extends ComponentPropsWithoutRef<'h4'> {
  required?: boolean;
}

const Paragraph = ({ id, required = false, children, ...attributes }: ParagraphProps) => (
    <h4 css={getStyling} id={id} {...attributes}>
      {children}{' '}
      {required && (
        <span aria-hidden>
          *
        </span>
      )}
    </h4>
  );
  

export default Paragraph;