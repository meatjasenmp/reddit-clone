"use client";

import { PostProps } from "@/app/components/Post";
import { handleImagePreview } from "@/app/api/media";
import Image from "next/image";

export default function ImageComponent({ post }: PostProps) {
  const image = handleImagePreview(post);
  return <Image src={image.url} width={image.width} height={image.height} alt={post.title} />;
}
