export default async function Store({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = await params;
  console.log(slug);
  return <div> </div>;
}
