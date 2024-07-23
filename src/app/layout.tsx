import type { Metadata } from 'next';
import { openSans } from '@/app/fonts';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'The Wardrobe',
  description: 'Online clothing store',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

type ReadonlyRootLayoutProps = Readonly<RootLayoutProps>;

export default function RootLayout({ children }: ReadonlyRootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  );
}
