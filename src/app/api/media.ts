import { RedditPost } from "@/app/api/types";

enum POST_HINTS {
  VIDEO = "hosted:video",
  RICH_VIDEO = "rich:video",
  IMAGE = "image",
  LINK = "link",
}

export function handleGallery(post: RedditPost) {
  const imageUrls: string[] = [];
  const galleryData = post.gallery_data;
  const mediaMetadata = post.media_metadata;

  for (const item of galleryData.items) {
    const mediaId = item.media_id;
    const metadata = mediaMetadata[mediaId];
    const url = metadata.s.u;
    imageUrls.push(url);
  }

  return imageUrls;
}

export function handleVideo(post: RedditPost) {}

export function handleImage(post: RedditPost) {
  if (post.is_gallery) return handleGallery(post);
}

export function handleLink(post: RedditPost) {}

export function handlePostMedia(post: RedditPost) {
  if (post.post_hint === POST_HINTS.IMAGE) return handleImage(post);
  if (post.post_hint === POST_HINTS.VIDEO) return handleVideo(post);
  if (post.post_hint === POST_HINTS.LINK) return handleLink(post);
}
