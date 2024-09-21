import { RedditPost, MediaMetadata, GalleryData } from "@/app/api/types";

export function handleGallery(post: RedditPost) {
  if (!post.gallery_data) return;

  const imageUrls: string[] = [];
  const galleryData = post.gallery_data;
  const mediaMetadata = post.media_metadata;

  for (const item of galleryData.items) {
    const mediaId = item.media_id;
    const metadata = mediaMetadata[mediaId];
    const url = metadata.s.u;
    imageUrls.push(url);
  }
}

export function handleVideo(post: RedditPost) {}

export function handleImage(post: RedditPost) {}

export function handleLink(post: RedditPost) {}

export function handlePostMedia(post: RedditPost) {
  if (post.is_gallery) return handleGallery(post);
}
