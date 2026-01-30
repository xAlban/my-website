import React, { useEffect, useRef } from "react";
import MeSection from "./section/MeSection";
import SkillSection from "./section/SkillSection";
import ExperienceSection from "./section/ExperienceSection";
import ProjectSection from "./section/ProjectSection";
import { useActiveSection } from "@/context/ActiveSectionContext";

const SECTIONS = [
  {
    id: "me",
    content: <MeSection />,
  },
  {
    id: "skills",
    content: <SkillSection />,
  },
  {
    id: "experiences",
    content: <ExperienceSection />,
  },
  {
    id: "projects",
    content: <ProjectSection />,
  },
];

export default function MainScreen() {
  const { setActiveSection } = useActiveSection();
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const refs = contentRefs.current;
    Object.values(refs).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [setActiveSection]);

  return (
    <div className="w-full flex flex-col items-center bg-black">
      {/* Hero Section */}
      <div
        id="hero"
        ref={(el) => {
          contentRefs.current["hero"] = el;
        }}
        className="relative w-full h-svh bg-[url(/profile_pic.jpg)] bg-cover bg-position-[35%] md:bg-center bg-no-repeat"
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-12 left-8 md:left-12 z-10 max-w-5xl">
          <h1 className="text-white font-bold text-3xl md:text-6xl leading-tight drop-shadow-lg flex flex-col items-start gap-2 uppercase">
            <span>HELLO I&apos;M</span>
            <span className="relative inline-block px-4 py-1 ml-[-16px]">
              <span className="absolute inset-0 bg-custom-green skew-x-[-15deg]" />
              <span className="relative z-10 text-black">ALBAN ELEZI</span>
            </span>
            <span>SOFTWARE ENGINEER LOOKING FOR WORK</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full text-white flex flex-col pb-8 bg-custom-gray justify-center items-center">
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => {
              contentRefs.current[section.id] = el;
            }}
            className={`flex flex-col justify-center w-full h-full min-h-svh ${section.id === "projects" ? "" : "px-8"}`}
          >
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
}
