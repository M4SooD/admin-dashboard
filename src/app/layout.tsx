import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexus Admin Panel',
  description: 'Enterprise Banking Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-950`}>
        <div className="flex h-screen overflow-hidden">
          <div className="hidden md:flex">
            <Sidebar />
          </div>
          <main className="flex-1 flex flex-col h-full overflow-hidden bg-zinc-50 dark:bg-black">
            <Header />
            <div className="flex-1 overflow-y-auto p-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
