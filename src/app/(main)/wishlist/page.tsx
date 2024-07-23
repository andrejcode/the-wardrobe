import { auth } from '@/auth';
import Clothing from '@/components/clothing';
import ClothingSkeleton from '@/components/clothing/clothing-skeleton';
import { fetchUserByEmail } from '@/lib/data';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

interface WishlistProps {
  searchParams?: {
    page?: string;
  };
}

export default async function Wishlist({ searchParams }: WishlistProps) {
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const session = await auth();

  if (!session || !session.user) {
    redirect('/signin');
  }

  const user = await fetchUserByEmail(session.user.email!);

  return (
    <Suspense fallback={<ClothingSkeleton />}>
      <Clothing title="Wishlist" page={page} userId={user!.id} />
    </Suspense>
  );
}
