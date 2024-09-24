import { PostProps } from "@/app/components/Post";
import { getPostMediaType, POST_HINTS } from "@/app/api/media";
import ImageComponent from "@/app/components/Image";
import ImageGallery from "@/app/components/ImageGallery";

interface MediaComponentProps {
  type: POST_HINTS | null | undefined;
}

function MediaComponent({ type, post }: PostProps & MediaComponentProps) {
  if (type === POST_HINTS.IMAGE) {
    if (post?.is_gallery) return <ImageGallery post={post} />;
    return <ImageGallery post={post} />;
  }

  return <></>;
}

export default function Media({ post }: PostProps) {
  const type = getPostMediaType(post);
  return <MediaComponent type={type} post={post} />;
}
