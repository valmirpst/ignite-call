import type { Metadata } from 'next';
import Providers from '../lib/providers';
import './styles/globals.css';

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
      <Providers>{children}</Providers>
    </html>
  );
}
