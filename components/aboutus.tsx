"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AccordionDemo } from "./customaccordion";

const images = [
  "/assets/images/project1.jpg",
  "/assets/images/project4.jpg",
  "/assets/images/project2.png",
  "/assets/images/project1.png",
];

export default function Aboutus() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
      setPreloadedImages(images);
    };
    preloadImages();
  }, []);

  const handleAccordionSelect = (id: number) => {
    setSelectedImage(id - 1);
  };
  return (
    <section
      className="text-center py-20 px-6 md:px-10 text-white"
      id="projects"
    >
      <div className="xl:max-w-360 mx-auto">
        <h2 className="text-7xl font-medium max-md:text-5xl max-sm:text-4xl text-black/80">About Us</h2>
        <div className="flex gap-12 items-center">
          <div className="relative w-full h-96 lg:h-145 rounded-2xl overflow-hidden hidden lg:block">
            {preloadedImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Interstate step ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out xl:object-cover ${
                  index === selectedImage ? "opacity-100" : "opacity-0"
                }`}
                width={900}
                height={540}
                priority={index === 0}
                loading="eager"
              />
            ))}
          </div>
          <AccordionDemo onSelect={handleAccordionSelect} />
        </div>
      </div>
    </section>
  );
}
