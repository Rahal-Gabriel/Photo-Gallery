import { FullPageImageView } from '~/app/common /full-page-image-view';
import { getImage } from '../../../../server/queries'; 
import {Modal} from './modal';

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const photoId = resolvedParams.id;
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  

  return <Modal>
    <FullPageImageView  id={idAsNumber}/>
    </Modal>;
}