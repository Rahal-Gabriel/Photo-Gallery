import Link from "next/link";
import { db } from "../server/db";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Images() {
  try {
    const images = await getMyImages();

    return (
      <main className="">
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((image) => (
            <div key={image.id} className="w-48 flex h-48 flex-col">
              <Link href={`/img/${image.id}`}>
              <Image 
              src={image.url} 
              style={{ objectFit: "contain"}} 
              width={480}
              height={480}
              alt={image.name}  />
              </Link>
              <div className="text-sm">{image.name}</div>
            </div>
          ))}
        </div>
      </main>
    );
  } catch (error) {
    // Verifica se é um erro de autorização
    if (error instanceof Error && error.message === "Unauthorized") {
      return (
        <main className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-xl mb-4">Você precisa fazer login para ver as imagens</h2>
        </main>
      );
    }

    // Para outros tipos de erro
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">
          Ocorreu um erro ao carregar as imagens. Tente novamente mais tarde.
        </div>
      </main>
    );
  }
}
