import { theme } from '@unimake-ui/react';
import 'styled-components';

type ThemeType = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {}
}
