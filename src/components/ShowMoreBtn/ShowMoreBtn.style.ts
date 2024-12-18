import { css } from '@emotion/react';

import { themes } from '../../styles/Theme';

export const showMoreBtnStyling = css({
  fontSize: themes.dark.typography.body02.fontSize,
  lineHeight: themes.dark.typography.body02.lineHeight,
  cursor: 'pointer',
  color: themes.dark.color.gray500,
});
