import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import theme from './ui/theme';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Devs Experts',
  description: 'Seja bem vindo ao Devs Experts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang='pt-BR'>
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
