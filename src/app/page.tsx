import Link from "next/link";
import { db } from "../server/db";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";



export default async function HomePage() {
  headers();

  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">

      {images.map((image) => (
          <div key={image.id} className="w-48 flex flex-col">
            <img src={image.url} />
            <div className="text-sm">{image.name}</div>
          </div>
        ))
        }</div>
      Hello (gallery in progress)
    </main>
  );
}
