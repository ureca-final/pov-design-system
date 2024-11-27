import { css } from '@emotion/react';

import { themes } from '../../styles/Theme';
import { fadeIn } from '../../styles/animation';
import { useTheme } from '../../PovProvider';

export const backdropStyling = css({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: themes.dark.zIndex.overlayMiddle,

  width: '100%',
  height: '100%',

  backgroundColor: 'rgba(0, 0, 0, .15)',

  cursor: 'pointer',
});

export const dialogStyling = () => {
  const { theme } = useTheme();

  return css({
  position: 'fixed',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: themes.dark.zIndex.overlayTop,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  minWidth: '300px',
  padding: themes.dark.spacer.spacing4,
  margin: '0 auto',

  border: 'none',
  borderRadius: themes.dark.borderRadius.large,

  backgroundColor: theme.backgroundElevated,
  boxShadow: themes.dark.boxShadow.shadow8,

  animation: `${fadeIn} 0.2s ease-in`,
  });
};

export const closeButtonStyling = css({
  position: 'absolute',
  right: '24px',
  top: '24px',
  alignSelf: 'flex-end',

  marginBottom: themes.dark.spacer.spacing1,

  border: 'none',
  backgroundColor: 'transparent',

  cursor: 'pointer',
});
