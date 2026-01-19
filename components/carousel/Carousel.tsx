"use client";
import { useEffect, useState } from "react";
import "./Carousel.css";

interface CarouselProps {
  items: string[];
  speed?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [carouselItems, setCarouselItems] = useState<string[]>([]);

  useEffect(() => {
    if (items.length > 0) {
      setCarouselItems(items);
    }
  }, [items]);

  if (carouselItems.length === 0) {
    return null; // Or a loading indicator
  }

  const duplicatedItems = [...carouselItems, ...carouselItems];

  return (
    <div
      className="w-full overflow-hidden h-[50dvh]"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
      }}
    >
      <div className="flex animate-scroll">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item})` }}
            className={`${index !== 0 ? "-ml-[60px] " : ""}w-[75%] md:w-[50%] xl:w-[33%] h-[50dvh] flex-shrink-0 bg-cover bg-center hover:scale-110 transition-transform mask-[url(/image_mask.svg)] bg-position-[50%] mask-no-repeat mask-contain mask-center`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
