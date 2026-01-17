"use client";

import IntroScreen from "@/components/IntroScreen";
import MainScreen from "@/components/MainScreen";
import { useRef } from "react";

export default function Home() {
    const secondRef = useRef<HTMLElement | null>(null);

    // Smoothly scroll the section into view using native smooth scrolling
    function scrollToSecond() {
        secondRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        // Page container with vertical snap — each child is full viewport height
        <div className="h-dvh w-screen bg-black snap-mandatory snap-y overflow-y-auto no-scrollbar">
            
        </div>
    );
}
