import {  getImage } from "~/server/queries";

export async function FullPageImageView(props: {id: number}) {
    const image = await getImage(props.id);
    return( 
    <div className="flex w-full h-full min-w-0 ">
        <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className= 'flex-shrink  object-contain'/>
        </div>
   
    <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>
    </div>
    </div>
    )
}