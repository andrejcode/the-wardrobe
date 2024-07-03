import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'The Wardrobe',
  description: 'Online clothing store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
