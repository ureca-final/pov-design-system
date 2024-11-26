import { css } from '@emotion/react';

import { themes } from '../../styles/Theme';

export const labelStyling = css({
  fontSize: themes.dark.typography.body04.fontSize,
  lineHeight: themes.dark.typography.body04.lineHeight,
  fontWeight: themes.dark.typography.body04.fontWeight,
});

export const requiredStyling = css({
  color: themes.dark.color.red
});
