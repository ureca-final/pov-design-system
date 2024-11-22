import { css } from '@emotion/react';
import { themes } from '../../styles/Theme';

export const getStyling = css({
    fontSize: themes.dark.typography.paragraph.fontSize,
    lineHeight: themes.dark.typography.paragraph.lineHeight,
    fontWeight: themes.dark.typography.paragraph.fontWeight,
});
