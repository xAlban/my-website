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
    <div className="w-full h-full flex flex-col md:flex-row gap-y-5 text-left pb-4 pt-24">
      <div className="flex-1 max-h-[50%] md:max-h-[70%]">
        <Carousel items={photos.map((photo) => `/photo_carousel/${photo}`)} />
      </div>
      <div className="flex flex-col flex-1 justify-center gap-20 px-[40px] py-12">
        <h2 className="text-white font-bold text-2xl md:text-6xl">ABOUT</h2>
        <p className="text-xl md:text-3xl">
          New mobile phone ? Framework ? I&apos;ll be up to date!
          <br />
          I&apos;m interested in all techs at an international level.
          That&apos;s why I&apos;m open to any opportunity abroad.
        </p>
        <div className="flex flex-col gap-4 text-xl md:text-3xl">
          <h3 className="font-bold text-2xl md:text-4xl">Hobbies:</h3>
          <p>Volleyball</p>
          <Link
            href="https://www.flickr.com/photos/200167340@N06/albums"
            className="text-custom-purple underline"
          >
            Photography
          </Link>
          <p>Competitive Video-games</p>
        </div>
      </div>
    </div>
  );
}
