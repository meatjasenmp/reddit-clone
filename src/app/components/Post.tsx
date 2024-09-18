import { RedditPost } from "@/app/api/types";

export default function Post({ post }: { post: RedditPost }) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow text-black mb-4 last:mb-0">
      <div className="px-4 py-5 sm:px-6">
        <h4>{post.title}</h4>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <p>Content</p>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <p>Footer</p>
      </div>
    </div>
  );
}
