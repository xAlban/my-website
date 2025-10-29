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
        <div className="h-dvh w-screen bg-black snap-mandatory snap-y overflow-y-auto">
            <section className="h-dvh w-full snap-start bg-[url(/profile_pic.jpg)] md:bg-none bg-position-[33%] bg-size-[450%]">
                <IntroScreen startClick={scrollToSecond} />
            </section>

            <section
                ref={secondRef}
                className="h-dvh w-full snap-start bg-[#1E1E1E] flex items-center justify-center"
            >
                <MainScreen />
            </section>
        </div>
    );
}
