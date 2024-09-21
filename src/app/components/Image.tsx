import { PostProps } from "@/app/components/Post";
import ImageGallery from "@/app/components/ImageGallery";

export default function ImageComponent({ post }: PostProps) {
  return (post.is_gallery && <ImageGallery post={post} />) || <></>;
}
