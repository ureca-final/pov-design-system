import { css } from '@emotion/react';

import { themes } from '../../styles/Theme';

export const switchToggleStyling = css({
  appearance: 'none',
  position: 'relative',
  width: '40px',
  height: '20px',

  boxSizing: 'content-box',
  backgroundColor: themes.dark.color.gray300,
  border: `4px solid ${themes.dark.color.gray300}`,
  borderColor: themes.dark.color.gray300,
  borderRadius: '16px',

  cursor: 'pointer',

  '&::before': {
    position: 'absolute',
    left: 0,
    width: '20px',
    height: '20px',

    backgroundColor: themes.dark.color.white,
    borderRadius: '50%',

    content: '""',
    transition: 'left 250ms linear',
  },

  '&:checked': {
    backgroundColor: themes.dark.color.green600,
    border: `4px solid ${themes.dark.color.green600}`,
  },

  '&:checked::before': {
    left: '20px',
  },
});
