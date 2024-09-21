import Media from "@/app/components/Media";
import { RedditPost } from "@/app/api/types";

export interface PostProps {
  post: RedditPost;
}

export default function Post({ post }: PostProps) {
  return (
    <article className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow text-black mb-4 last:mb-0">
      <header className="px-4 py-5 sm:px-6">
        <h4 className="text-lg font-bold">{post.title}</h4>
      </header>
      <Media post={post} />
      <footer className="px-4 py-4 sm:px-6">Footer</footer>
    </article>
  );
}
