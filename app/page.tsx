"use client";

import { useRef } from "react";
import ArrowIcon from "@/components/ArrowIcon";
import MainTitle from "@/components/MainTitle";
import { Button } from "@/components/ui/button";

export default function Home() {
  const secondRef = useRef<HTMLElement | null>(null);

  // Smoothly scroll the section into view using native smooth scrolling
  function scrollToSecond() {
    secondRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    // Page container with vertical snap — each child is full viewport height
  <div className="h-screen w-screen bg-black snap-y snap-mandatory overflow-y-auto">
      {/* Section 1: existing hero (fills viewport) */}
      <section className="h-screen w-full snap-start">
        <div className="h-full w-full flex justify-center items-center relative">
          <MainTitle />
          <div className="flex flex-col justify-center items-center absolute bottom-[16px] w-[120px] gap-y-2">
            <div className="flex flex-row h-[60px] rotate-[90deg]">
              <ArrowIcon direction="right" className="w-full"/>
              <ArrowIcon direction="right" className="w-full"/>
            </div>
            <Button className="w-full" onClick={scrollToSecond}>
              START
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: empty full-screen area for scrollable content (placeholder) */}
      <section ref={secondRef} className="h-screen w-full snap-start bg-black flex items-center justify-center">
        {/* Empty layout for future content */}
      </section>
    </div>
  );
}
