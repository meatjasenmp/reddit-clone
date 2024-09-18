import { RedditPost } from "@/app/api/types";

export default function Post({ post }: { post: RedditPost }) {
  return <div>{post.title}</div>;
}
