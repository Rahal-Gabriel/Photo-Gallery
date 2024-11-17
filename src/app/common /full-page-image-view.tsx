import {  getImage } from "~/server/queries";

export async function FullPageImageView(props: {id: number}) {
    const image = await getImage(props.id);
    return( 
    <div className="flex w-full h-full min-w-0 ">
        <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className= 'flex-shrink  object-contain'/>
        </div>
   
    <div className="w-48 flex flex-col flex-shrink-0 border-1">
        <div className="text-x1 font-bold">{image.name}</div>
    </div>
    </div>
    )
}