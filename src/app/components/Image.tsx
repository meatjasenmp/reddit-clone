"use client";

import { PostProps } from "@/app/components/Post";
import { handleImagePreview } from "@/app/api/media";
import Image from "next/image";

interface Image {
  url: string;
  width: number;
  height: number;
}

export default function ImageComponent({ post }: PostProps) {
  const image: Image = handleImagePreview(post);
  return <Image src={image.url} width={image.width} height={image.height} alt={post.title} />;
}
