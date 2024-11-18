import { Global, ThemeProvider } from '@emotion/react';
import type { PropsWithChildren } from 'react';

import { GlobalStyle } from '@styles/GlobalStyle';
import { Theme } from '@styles/Theme';

type PovProviderProps = PropsWithChildren;

const PovProvider = ({ children }: PovProviderProps) => (
  <ThemeProvider theme={Theme}>
    <Global styles={GlobalStyle} />
    {children}
  </ThemeProvider>
);

export default PovProvider;
