import { fetchReddit } from "@/app/api/helpers";
import Post from "@/app/components/Post";

export const revalidate = 3600;

export default async function Home() {
  const posts = await fetchReddit();

  return (
    <>
      {posts.data.children.map((post) => (
        <Post key={post.data.id} post={post.data} />
      ))}
    </>
  );
}
