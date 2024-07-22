'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    async function fetchAuthStatus() {
      try {
        const response = await fetch('/api/admin');
        const data = await response.json();

        if (response.ok) {
          console.log(data.message);
        } else {
          console.log(data.message);
          router.push('/signin');
        }
      } catch (error) {
        console.error('Failed to fetch authentication status');
      }
    }

    fetchAuthStatus();
  }, [router]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className="text-xl font-bold">Admin Page</h1>
    </div>
  );
}
