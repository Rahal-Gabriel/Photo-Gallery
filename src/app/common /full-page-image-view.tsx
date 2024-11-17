import {  getImage } from "~/server/queries";
import { clerkClient } from "@clerk/nextjs/server";

export async function FullPageImageView(props: {id: number}) {
    const image = await getImage(props.id);

    const clerk = await clerkClient();
    const userInfo = await clerk.users.getUser(image.userId);
    
    return( 
    <div className="flex w-full h-full min-w-0  m-0">
        <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className= 'flex-shrink h-screen object-contain'/>
        </div>
   
    <div className="flex-grow h-full w-56 flex-shrink-0  border-l">
        <div className="border-b w-full p-2 text-left text-xl">{image.name}</div>

        <div className="flex flex-col p-2">
          <div>Enviado por</div>
          <div>{userInfo.fullName}</div>
        </div>
        <div className="flex flex-col p-2">
          <div>Criado em</div>
          <div>{new Date(image.createdAt).toLocaleDateString()}</div>
        </div>
        <div className="flex flex-col p-2">
          <div>Uploaded By:</div>
          <div>{userInfo.fullName}</div>
        </div>

    </div>
    </div>  
    )
}