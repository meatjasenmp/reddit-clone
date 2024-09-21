import { RedditPost } from "@/app/api/types";
import ImageComponent from "@/app/components/Image";
import { getPostMedia, POST_HINTS } from "@/app/api/media";

interface MediaProps {
  post: RedditPost;
}

interface MediaComponentProps {
  postMedia: POST_HINTS | null;
}

function MediaComponent({ postMedia, post }: MediaProps & MediaComponentProps) {
  if (postMedia === POST_HINTS.IMAGE) return <ImageComponent />;
  return <></>;
}

export default function Media({ post }: MediaProps) {
  const postMedia = getPostMedia(post);
  return <MediaComponent postMedia={postMedia} post={post} />;
}
