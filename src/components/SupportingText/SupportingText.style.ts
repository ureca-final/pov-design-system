import { css } from '@emotion/react';

import type { SupportingTextProps } from './SupportingText';

import { themes } from '../../styles/Theme';

export const getTextStyling = (isError: Required<SupportingTextProps>['isError']) =>
  css({
    fontSize: themes.dark.typography.body04.fontSize,
    lineHeight: themes.dark.typography.body04.lineHeight,
    fontWeight: themes.dark.typography.body04.fontWeight,
    color: isError ? themes.dark.color.red : themes.dark.color.gray400,
  });
