import { Body } from '@/app/styles/globals';
import '@/app/styles/globals.css';
import { sourceSans3 } from '@/lib/fonts';

import StyledJsxRegistry from '@/lib/styled-jsx-registry';
import { darkTheme, ThemeProvider } from '@unimake-ui/react';
import { ReactNode } from 'react';

type ContextsProviderProps = {
  children: ReactNode;
};

export default function ContextsProvider({ children }: ContextsProviderProps) {
  return (
    // @ts-expect-error Type error at styled.d.ts because there are two variable themes (theme and darkTheme)
    <ThemeProvider theme={darkTheme}>
      <StyledJsxRegistry>
        <Body className={`${sourceSans3.variable} antialiased`}>{children}</Body>
      </StyledJsxRegistry>
    </ThemeProvider>
  );
}
