import { RedditPost } from "@/app/api/types";

export enum POST_HINTS {
  VIDEO = "hosted:video",
  RICH_VIDEO = "rich:video",
  IMAGE = "image",
  LINK = "link",
  SELF = "self",
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

export function handleImageGallery(post: RedditPost) {
  const images: Image[] = [];
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

export function handleImagePreview(post: RedditPost): Image {
  const { preview } = post;
  return {
    url: preview?.images[0].source.url || "",
    width: preview?.images[0].source.width || 0,
    height: preview?.images[0].source.height || 0,
  };
}

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
