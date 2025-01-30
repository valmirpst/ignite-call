import { Body } from '@/app/styles/globals';
import { sourceSans3 } from '@/lib/fonts';
import { darkTheme, ThemeProvider } from '@unimake-ui/react';
import { ReactNode } from 'react';
import StyledJsxRegistry from './styled-jsx-registry';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    // @ts-expect-error Type error at styled.d.ts because there are two variable themes (theme and darkTheme)
    <ThemeProvider theme={darkTheme}>
      <StyledJsxRegistry>
        <Body className={`${sourceSans3.variable} antialiased`}>{children}</Body>
      </StyledJsxRegistry>
    </ThemeProvider>
  );
}
