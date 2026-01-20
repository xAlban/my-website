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
    <div className="w-full h-full flex flex-col md:flex-row gap-y-5 text-left py-4">
      <div className="flex-1 max-h-[50%] md:max-h-[70%]">
        <Carousel items={photos.map((photo) => `/photo_carousel/${photo}`)} />
      </div>
      <div className="flex-1">
        <h2 className="text-custom-purple text-3xl px-[40px]">
          TECH ENTHUSIAST
        </h2>
        <div className="px-[40px]">
          <p className="text-xl">
            New mobile phone ? Framework ? I&apos;ll be up to date!
            <br />
            I&apos;m interested in all techs at an international level.
            That&apos;s why I&apos;m open to any opportunity abroad.
          </p>
          <p className="text-xl">Hobbies:</p>
          <ul className="list-disc list-inside marker:text-custom-green text-xl">
            <li>Volleyball</li>
            <li>
              <Link
                href="https://www.flickr.com/photos/200167340@N06/albums"
                className="text-custom-purple underline"
              >
                Photography
              </Link>
            </li>
            <li>Competitive Video-games</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
