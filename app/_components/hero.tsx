"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Transition from "./Transition";

const images = [
  { id: 1, img: "/blob (1).svg" },
  { id: 2, img: "/blob (2).svg" },
  { id: 3, img: "/blob (3).svg" },
  { id: 4, img: "/blob (4).svg" },
  { id: 5, img: "/blob (5).svg" },
  { id: 6, img: "/blob (6).svg" },
  { id: 7, img: "/blob (7).svg" },
];

const Hero = () => {
  const [state, setState] = useState(images[0].img);
  const [download, setDownload] = useState(true);
  const indexRef = useRef(0);

  const toggleClick = () => setDownload(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownload(true);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % images.length;
      setState(images[indexRef.current].img);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-24 md:top-36 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 z-20 bg-transparent">
      <Transition>
        <div className="text-center md:text-left flex-1 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-distinct">
            Omar | Backend Developer
          </h1>
          <p className="text-scandry text-base sm:text-lg font-light leading-relaxed">
            I’m Omar, a Backend Developer specializing in high-performance systems with Node.js, Express, NestJS, and Python. I build scalable APIs and optimize applications for a seamless user experience. 🚀
          </p>
      <Link href="/cv.pdf" download="cv.pdf" target="_blank" className="relative top-3">
        <div
            
            onClick={toggleClick}
            className="py-3 px-6 m-auto md:m-0 bg-distinct rounded-full border border-text flex items-center hover:scale-105 transition-all duration-200 justify-center gap-2 mt-4 w-fit text-text hover:shadow-text hover:shadow-xl"
          >
            Download CV
            <Image
              src={`/${download ? "download-cloud.svg" : "save.svg"}`}
              className="bg-text rounded-full transition-all duration-300"
              alt="Download Icon"
              width={24}
              height={24}
            />
          </div>
          </Link>
        </div>
      </Transition>

      <div className="relative flex items-center justify-center w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[430px] md:h-[430px] z-[-1] transition-all duration-500 ease-in-out animate-pulse scale-105 hover:scale-110">
          <Image
            src={state}
            alt="Decorative Animated Blob"
            width={450}
            height={450}
            className="object-cover transition-all duration-500 ease-in-out"
          />
        </div>

        <Transition>
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden z-10 shadow-lg border-4 border-white dark:border-gray-700">
            <Image
              src="/profile.jpg"
              alt="Omar's Profile Picture"
              width={256}
              height={256}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Hero;
