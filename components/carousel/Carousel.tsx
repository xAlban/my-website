"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel as CarouselPrimitive,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselProps {
  items: string[];
  delay?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, delay = 3000 }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="w-full h-full overflow-hidden">
      <CarouselPrimitive
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: delay,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="ml-0">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-0"
            >
              <div className="w-full p-2">
                <div
                  style={{ backgroundImage: `url(${item})` }}
                  className="aspect-square w-full bg-cover bg-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselPrimitive>
    </div>
  );
};

export default Carousel;