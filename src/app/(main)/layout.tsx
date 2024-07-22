import Footer from '@/components/footer';
import Header from '@/components/header';
import { BagStoreProvider } from '@/providers/bag-store-provider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BagStoreProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </BagStoreProvider>
  );
}
