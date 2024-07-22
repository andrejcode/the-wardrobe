export default async function Page({
  searchParams,
}: {
  searchParams?: { session_id?: string; success?: boolean; canceled?: boolean };
}) {
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
    <div className="flex h-[90vh] w-screen items-center justify-center">
      <h1 className="text-xl font-bold">
        Payment {success ? 'Successful' : 'Canceled'}
      </h1>
    </div>
  );
}
