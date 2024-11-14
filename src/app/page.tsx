import { db } from "../server/db";
import { headers } from "next/headers";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">

    {[...images,...images,...images].map((image) => (
        <div key={image.id} className="w-48 flex flex-col">
          <img src={image.url} />
          <div className="text-sm">{image.name}</div>
        </div>
      ))}
      </div>
  )
}


export default async function HomePage() {
  headers();



  return (
    <main className="">

    <SignedOut>
      <div className="w-full h-full text-2xl text-center ">Acessa ai em cima</div>
    </SignedOut>
    <SignedIn>
      <Images />
    </SignedIn>

    </main>
  );
}
