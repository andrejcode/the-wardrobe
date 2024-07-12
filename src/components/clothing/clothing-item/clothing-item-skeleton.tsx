export default function ClothingItemSkeleton() {
  return (
    <div className="m-4 flex h-[500px] max-w-80 animate-pulse flex-col rounded-lg bg-white p-4 shadow-lg">
      <div className="relative h-80 w-80 self-center bg-gray-200"></div>
      <div className="mt-4 h-6 bg-gray-200"></div>
      <div className="mt-2 h-6 bg-gray-200"></div>
      <div className="mt-2 h-6 bg-gray-200"></div>
      <div className="mt-2 h-6 bg-gray-200"></div>
    </div>
  );
}
