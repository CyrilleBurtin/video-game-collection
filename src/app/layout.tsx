import Header from '@/features/header/Header';
import ReactQueryProvider from '@/providers/QueryClientProvider';
import SessionWrapper from '@/providers/SessionWrappers';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <ReactQueryProvider>
        <html lang="en">
          <body>
            <Header />
            {children}
          </body>
        </html>
      </ReactQueryProvider>
    </SessionWrapper>
  );
}
