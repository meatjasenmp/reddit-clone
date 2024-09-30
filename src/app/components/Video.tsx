import { PostProps } from "@/app/components/Post";
import { handleVideo } from "@/app/api/media";

export default function Video({ post }: PostProps) {
  const video = handleVideo(post);
  return (
    <video width={video.video.width} height={video.video.height} controls poster={video.poster_url}>
      <source src={video.video.url} type="video/mp4" />
      <track src={video.video.dash_url} />
    </video>
  );
}
