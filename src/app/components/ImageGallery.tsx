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
      title: "Air Jordan 1",
    },
    {
      url: "https://sneakernews.com/wp-content/uploads/2008/01/air-jordan-1.jpg",
      width: 600,
      height: 400,
      title: "Air Jordan 1",
    },
    {
      url: "https://sneakernews.com/wp-content/uploads/2008/01/air-jordan-1.jpg",
      width: 600,
      height: 400,
      title: "Air Jordan 1",
    },
  ];

  function goToNextSlide() {
    if (images.length - 1 === currentIndex) return;

    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }

  function goToPreviousSlide() {
    if (currentIndex === 0) return;

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  }

  function slideStyles(isActive: boolean): string {
    const isVisible = isActive ? "opacity-100" : "opacity-0";
    return `w-full h-full absolute top-0 left-0 bg-cover ${isVisible}`;
  }

  function buttonStyles() {
    return "relative first:mr-2 z-20 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50";
  }

  return (
    <section className="relative w-full h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={slideStyles(index === currentIndex)}
          style={{ backgroundImage: `url(${image.url})` }}
          title={image.title}
          aria-label={image.title}
        />
      ))}
      <div className="mt-4 ml-4">
        <button className={buttonStyles()} onClick={goToPreviousSlide}>
          Previous
        </button>
        <button className={buttonStyles()} onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </section>
  );
}
