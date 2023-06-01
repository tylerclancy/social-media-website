import './styles/globals.css';
import { Inter } from 'next/font/google';

import Navbar from '../components/navbar';
import AuthProvider from './AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Simple MySpace Clone',
  description: 'Fullstack application built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
