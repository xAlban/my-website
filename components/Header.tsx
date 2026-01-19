"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header if at the top, or scrolling up
      // Hide header if scrolling down and not at the top
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 bg-black border-b-[3px] border-custom-green transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div>
        <div className="font-bold text-white text-xl tracking-wider">
          ALBAN ELEZI
        </div>
        <div className="text-white">
          Software Engineer
        </div>
      </div>
      {/* Placeholder for navigation or other header items if needed */}
      <div className="flex gap-4">
        <div>

        </div>
        <div>
          
        </div>
      </div>
    </header>
  );
}
