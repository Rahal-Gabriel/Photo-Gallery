import Link from "next/link";
import { db } from "../server/db";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Images() {
  try {
    const images = await getMyImages();
    const maxLength = 20; // Defina o número máximo de caracteres

    return (
      <main className="">
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {images.map((image) => (
            <div key={image.id} className="flex h-48 w-48 flex-col">
              <Link href={`/img/${image.id}`}>
                <div className="relative h-48 w-48">
                  <Image 
                    src={image.url} 
                    layout="fill"
                    objectFit="cover"
                    alt={image.name}  
                  />
                </div>
              </Link>
              <div className="text-sm">
                {image.name.length > maxLength 
                  ? `${image.name.slice(0, maxLength)}...` 
                  : image.name}
              </div>
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
