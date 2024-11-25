import type { ComponentPropsWithoutRef } from 'react';
import Icon from '../Icon/Icon';

import { showMoreBtnStyling } from './ShowMoreBtn.style';
export interface ShowMoreBtnProps extends ComponentPropsWithoutRef<'span'> {
  
}
const ShowMoreBtn = ({ id, children, ...attributes }: ShowMoreBtnProps) => (
  <span css={showMoreBtnStyling} {...attributes}>
    자세히 보기
    <span aria-hidden css={{ marginLeft: '8px' }}>
        <Icon icon="anglesmallright" />
    </span>
  </span>
);

export default ShowMoreBtn;
