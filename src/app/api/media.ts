import { RedditPost } from "@/app/api/types";

export enum POST_HINTS {
  VIDEO = "hosted:video",
  RICH_VIDEO = "rich:video",
  IMAGE = "image",
  LINK = "link",
}

export function handleImageGallery(post: RedditPost) {
  const imageUrls: string[] = [];
  const galleryData = post?.gallery_data;
  const mediaMetadata = post?.media_metadata;

  if (galleryData && mediaMetadata) {
    for (const item of galleryData.items) {
      const metadata = mediaMetadata[item.media_id];
      const url = metadata.s.u;
      imageUrls.push(url);
    }
  }

  return imageUrls;
}

export function handleImagePreview(post: RedditPost) {
  if (!post?.preview) return [];
  return post.preview.images;
}

export function getPostMediaType(post: RedditPost) {
  if (post.post_hint === POST_HINTS.IMAGE) return POST_HINTS.IMAGE;
  if (post.post_hint === POST_HINTS.VIDEO) return POST_HINTS.VIDEO;
  if (post.post_hint === POST_HINTS.RICH_VIDEO) return POST_HINTS.RICH_VIDEO;
  if (post.post_hint === POST_HINTS.LINK) return POST_HINTS.LINK;

  console.warn("Unknown post hint:", post.post_hint);
  return null;
}
