import { RedditPost } from "@/app/api/types";

export enum POST_HINTS {
  VIDEO = "hosted:video",
  RICH_VIDEO = "rich:video",
  IMAGE = "image",
  LINK = "link",
  SELF = "self",
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
}

export interface VideoType {
  poster_url: string;
  video: {
    url: string;
    hls_url: string;
    dash_url: string;
    width: number;
    height: number;
  };
}

export function handleImageGallery(post: RedditPost): ImageType[] {
  const images: ImageType[] = [];
  const galleryData = post?.gallery_data;
  const mediaMetadata = post?.media_metadata;

  if (galleryData && mediaMetadata) {
    for (const item of galleryData.items) {
      const metadata = mediaMetadata[item.media_id];
      images.push({
        url: metadata.s.u,
        width: metadata.s.x,
        height: metadata.s.y,
      });
    }
  }

  return images;
}

export function handleImagePreview(post: RedditPost): ImageType {
  const { preview } = post;
  return {
    url: preview?.images[0].source.url || "",
    width: preview?.images[0].source.width || 0,
    height: preview?.images[0].source.height || 0,
  };
}

export function handleVideo(post: RedditPost): VideoType {
  const { preview, secure_media } = post;

  return {
    poster_url: preview?.images[0].source.url || "",
    video: {
      url: secure_media?.reddit_video?.fallback_url || "",
      hls_url: secure_media?.reddit_video?.hls_url || "",
      dash_url: secure_media?.reddit_video?.dash_url || "",
      width: secure_media?.reddit_video?.width || 0,
      height: secure_media?.reddit_video?.height || 0,
    },
  };
}

export function handleRichVideo(post: RedditPost) {}

export function getPostMediaType(post: RedditPost) {
  if (!post?.post_hint) return;

  if (post.post_hint === POST_HINTS.IMAGE) return POST_HINTS.IMAGE;
  if (post.post_hint === POST_HINTS.VIDEO) return POST_HINTS.VIDEO;
  if (post.post_hint === POST_HINTS.RICH_VIDEO) return POST_HINTS.RICH_VIDEO;
  if (post.post_hint === POST_HINTS.LINK) return POST_HINTS.LINK;
  if (post.post_hint === POST_HINTS.SELF) return POST_HINTS.SELF;

  console.warn("Unknown post hint:", post.post_hint);
  return null;
}
