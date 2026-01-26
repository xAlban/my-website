"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Carousel from "../carousel/Carousel";

export default function MeSection() {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-evenly md:flex-row gap-y-5 gap-x-24 text-left pb-4 pt-24">
      <div className="flex flex-1 max-w-[1000px] max-h-[50%] md:max-h-[70%] items-center">
        <Carousel items={photos.map((photo) => `/photo_carousel/${photo}`)} />
      </div>
      <div className="flex flex-col max-w-[1000px] flex-1 justify-center gap-20 md:px-[40px] py-12">
        <h2>ABOUT</h2>
        <p className="text-xl md:text-3xl">
          Always on the lookout for the next big thing, I thrive on staying
          ahead of the curve in our fast-evolving digital landscape. I&apos;m committed to continuous learning and technical
          excellence.
          <br />
          <br />
          My passion for technology is deeply rooted in its global impact, and
          I&apos;m always ready to bring my international mindset to ambitious
          projects and opportunities across the globe.
        </p>
        <div className="flex flex-col gap-4 text-xl md:text-3xl">
          <h3 className="font-bold text-2xl md:text-4xl">Hobbies</h3>
          <p>Volleyball</p>
          <Link
            href="https://www.flickr.com/photos/200167340@N06/albums"
            className="underline"
          >
            Photography
          </Link>
          <p>Competitive Video-games</p>
        </div>
      </div>
    </div>
  );
}
