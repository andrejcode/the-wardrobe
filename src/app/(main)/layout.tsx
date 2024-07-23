import Footer from '@/components/footer';
import Header from '@/components/header';
import { BagStoreProvider } from '@/providers/bag-store-provider';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <BagStoreProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </BagStoreProvider>
  );
}
