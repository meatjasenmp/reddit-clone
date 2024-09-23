"use client";

import { PostProps } from "@/app/components/Post";
import { handleImagePreview } from "@/app/api/media";
import { RedditImage } from "@/app/api/types";
import Image from "next/image";

export default function ImageComponent({ post }: PostProps) {
  const images: RedditImage[] = handleImagePreview(post);
  return (
    <Image
      src={images[0].source.url}
      width={images[0].source.width}
      height={images[0].source.height}
      alt={post.title}
    />
  );
}
