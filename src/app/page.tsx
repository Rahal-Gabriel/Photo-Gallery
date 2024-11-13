import Link from "next/link";

const mockUrls = [

  "https://utfs.io/f/8uzWEc3gRZVN4wig6wBU3mVnS6xpLDEIXaJFyU1wdBzbhNZu",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
       [...mockImages,...mockImages,...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
        }</div>
      Hello (gallery in progress)
    </main>
  );
}
