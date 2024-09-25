"use client";

import { useState } from "react";
import { PostProps } from "@/app/components/Post";
import { handleImageGallery } from "@/app/api/media";
import Button from "@/app/components/Button";
import { parseStyles } from "@/app/helpers/styles";

function slideStyles(isActive: boolean): string {
  const styles = {
    position: "absolute top-0 left-0",
    appearance: `w-full h-full bg-cover ${isActive ? "opacity-100" : "opacity-0"}`,
  };
  return parseStyles(styles);
}

const slideContainerStyles = {
  position: "relative",
  appearance: "w-full h-96",
};

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

  return (
    <section className={parseStyles(slideContainerStyles)}>
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
        <Button onClick={goToPreviousSlide}>Previous</Button>
        <Button onClick={goToNextSlide}>Next</Button>
      </div>
    </section>
  );
}
