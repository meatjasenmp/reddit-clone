"use client";

import { useState } from "react";
import { PostProps } from "@/app/components/Post";
import { handleImageGallery } from "@/app/api/media";

export default function ImageGallery({ post }: PostProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const images = handleImageGallery(post);
  const images = [
    {
      url: "https://sneakernews.com/wp-content/uploads/2008/01/air-jordan-1.jpg",
      width: 600,
      height: 400,
    },
    {
      url: "https://sneakernews.com/wp-content/uploads/2008/01/air-jordan-1.jpg",
      width: 600,
      height: 400,
    },
    {
      url: "https://sneakernews.com/wp-content/uploads/2008/01/air-jordan-1.jpg",
      width: 600,
      height: 400,
    },
  ];

  function goToNextSlide() {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }

  function slideStyles(isActive: boolean): string {
    const isVisible = isActive ? "opacity-100" : "opacity-0";
    return `w-full h-full  bg-cover ${isVisible}`;
  }

  return (
    <section className="relative w-full h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={slideStyles(index === currentIndex)}
          style={{ backgroundImage: `url(${image.url})` }}
        />
      ))}
    </section>
  );
}
