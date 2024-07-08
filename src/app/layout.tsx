import type { Metadata } from 'next';
import { inter } from '@/app/fonts';
import '@/app/globals.css';

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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
