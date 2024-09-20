import { RedditPost } from "@/app/api/types";

export default function Post({ post }: { post: RedditPost }) {
  return (
    <article className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow text-black mb-4 last:mb-0">
      <header className="px-4 py-5 sm:px-6">
        <h4 className="text-lg font-bold">{post.title}</h4>
      </header>
      <picture className="px-4 py-5 sm:p-6">Image</picture>
      <footer className="px-4 py-4 sm:px-6">Footer</footer>
    </article>
  );
}
