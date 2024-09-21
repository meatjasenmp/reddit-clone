import { RedditPost } from "@/app/api/types";
import ImageComponent from "@/app/components/Image";
import { getPostMediaType, POST_HINTS } from "@/app/api/media";

interface MediaProps {
  post: RedditPost;
}

interface MediaComponentProps {
  type: POST_HINTS | null;
}

function MediaComponent({ type, post }: MediaProps & MediaComponentProps) {
  if (type === POST_HINTS.IMAGE) return <ImageComponent />;
  return <></>;
}

export default function Media({ post }: MediaProps) {
  const type = getPostMediaType(post);
  return <MediaComponent type={type} post={post} />;
}
