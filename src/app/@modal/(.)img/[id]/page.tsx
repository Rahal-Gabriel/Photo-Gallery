import { getImage } from '../../../../server/queries'; 

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const photoId = resolvedParams.id;
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  const image = await getImage(idAsNumber);

  return <div><img src={image.url} className='w-96'/></div>;
}