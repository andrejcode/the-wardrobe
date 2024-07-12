export default function ClothingItemPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  return <h1>Clothing Item Page: {id}</h1>;
}
