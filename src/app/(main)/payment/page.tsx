import Button from '@/components/button';
import Link from 'next/link';
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from 'react-icons/io5';

interface PaymentPageProps {
  searchParams?: { session_id?: string; success?: boolean; canceled?: boolean };
}

export default async function PaymentPage({ searchParams }: PaymentPageProps) {
  const sessionId = searchParams?.session_id;
  const success = searchParams?.success;
  const canceled = searchParams?.canceled;

  async function updateQuantity() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/update-quantity`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId: sessionId }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update the database');
      }

      const data = await response.json();
      if (data.success) {
        console.log('Database updated');
      } else {
        console.error('Failed to update the database');
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (success && sessionId && !canceled) {
    updateQuantity();
  }

  return (
    <div className="flex h-[90vh] w-screen flex-col items-center justify-center">
      {success && <IoCheckmarkCircleOutline size={64} color="green" />}
      {canceled && <IoCloseCircleOutline size={64} color="red" />}
      <h1 className="my-4 text-xl font-bold">
        Payment {success ? 'Successful' : canceled ? 'Canceled' : 'Staus'}
      </h1>
      {!success && !canceled && (
        <p className="mb-4">
          Payments status will be displayed here after the purchase.
        </p>
      )}
      <Link href="/shop/all">
        <Button role="link" rounded>
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
