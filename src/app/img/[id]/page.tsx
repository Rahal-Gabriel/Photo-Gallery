import { FullPageImageView } from '~/app/common /full-page-image-view';



export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const photoId = resolvedParams.id;
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  

  return <FullPageImageView id={idAsNumber} />;
}