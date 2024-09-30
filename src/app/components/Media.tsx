import { PostProps } from "@/app/components/Post";
import { getPostMediaType, POST_HINTS } from "@/app/api/media";
import ImageComponent from "@/app/components/Image";
import ImageGallery from "@/app/components/ImageGallery";
import Video from "@/app/components/Video";

interface MediaComponentProps {
  type: POST_HINTS | null | undefined;
}

function MediaComponent({ type, post }: PostProps & MediaComponentProps) {
  if (type === POST_HINTS.IMAGE) {
    if (post?.is_gallery) return <ImageGallery post={post} />;
    return <ImageComponent post={post} />;
  }
  if (type === POST_HINTS.VIDEO) return <Video post={post} />;

  return <></>;
}

export default function Media({ post }: PostProps) {
  const type = getPostMediaType(post);
  return <MediaComponent type={type} post={post} />;
}
