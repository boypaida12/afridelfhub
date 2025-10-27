import React from "react";
import ContactButton from "./ui/contact-button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[url('/assets/images/hero-bg.JPG')] bg-center bg-cover text-white text-shadow-black text-shadow-md flex flex-col bg-linear-to-tl from-[#fff8f8] via-[#fff7f7cf] to-[#ffffff] items-center justify-center text-center max-sm:py-28 relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-75 after:z-10">
      <div className="z-50">
        <h1 className="text-7xl max-md:text-5xl max-sm:text-3xl px-1 font-medium">
          Discover{" "}
          <span className="relative">
            Western North{" "}
            <Image
              src="/vector.svg"
              alt="vector"
              className="absolute left-0 -bottom-1 -z-50"
              width={800}
              height={100}
            />
          </span>
        </h1>
        <p className="w-11/12 lg:w-3/4 xl:w-5/12 my-12 max-[32rem]:text-sm lg:text-xl mx-auto">
          Our mission is to establish a vibrant hub that empowers marginalized
          communities through holistic capacity building, vocational training,
          and business development initiatives.
        </p>
        <ContactButton className="shadow-2xl bg-white text-black text-shadow-none" />
        {/* <AnimatedLogoCloud /> */}
      </div>
    </div>
  );
}
