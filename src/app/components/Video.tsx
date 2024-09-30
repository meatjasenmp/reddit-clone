import { PostProps } from "@/app/components/Post";
import { handleVideo } from "@/app/api/media";

export default function Video({ post }: PostProps) {
  const video = handleVideo(post);
  return <></>;
}
