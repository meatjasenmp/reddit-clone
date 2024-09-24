"use client";

import { PostProps } from "@/app/components/Post";
import { handleImagePreview } from "@/app/api/media";

export default function ImageGallery({ post }: PostProps) {
  const images = handleImagePreview(post);
  return <></>;
}
