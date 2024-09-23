import { fetchReddit } from "@/app/api/requests";
import Post from "@/app/components/Post";
import { RedditPostData } from "@/app/api/types";

export default async function Home() {
  const posts: RedditPostData = await fetchReddit();

  return (
    <div className="container mx-auto max-w-2xl">
      {posts.data.children.map((post) => (
        <Post key={post.data.id} post={post.data} />
      ))}
    </div>
  );
}
