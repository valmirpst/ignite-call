import type { Metadata } from 'next';
import ContextsProvider from '../contexts/contexts-provider';

export const metadata: Metadata = {
  title: 'Ignite Call - Valmir Paiva Stachin',
  description: 'Ignite Call',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <ContextsProvider>{children}</ContextsProvider>
    </html>
  );
}
