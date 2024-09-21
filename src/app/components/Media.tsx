import { PostProps } from "@/app/components/Post";
import { getPostMediaType, POST_HINTS } from "@/app/api/media";
import ImageComponent from "@/app/components/Image";

interface MediaComponentProps {
  type: POST_HINTS | null;
}

function MediaComponent({ type, post }: PostProps & MediaComponentProps) {
  if (type === POST_HINTS.IMAGE) return <ImageComponent post={post} />;

  return <></>;
}

export default function Media({ post }: PostProps) {
  const type = getPostMediaType(post);
  return <MediaComponent type={type} post={post} />;
}
