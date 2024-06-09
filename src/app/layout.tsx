import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
    <html className='bg-primario' lang='pt-BR'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
