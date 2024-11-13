import Link from "next/link";
import { db } from "../server/db";

const mockUrls = [

  "https://utfs.io/f/8uzWEc3gRZVN4wig6wBU3mVnS6xpLDEIXaJFyU1wdBzbhNZu",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
      {[...mockImages,...mockImages,...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
        }</div>
      Hello (gallery in progress)
    </main>
  );
}
