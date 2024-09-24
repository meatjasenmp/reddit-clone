"use client";

import { useState } from "react";
import { PostProps } from "@/app/components/Post";
import { handleImageGallery } from "@/app/api/media";
import Image from "next/image";

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

  return (
    <section className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? "active" : ""}`}>
          <Image src={image.url} width={image.width} height={image.height} alt="Placeholder" />
        </div>
      ))}
    </section>
  );
}
