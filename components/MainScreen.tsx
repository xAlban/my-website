import React, { useEffect, useRef } from "react";
import MeTabContent from "./tab-content/MeTabContent";
import SkillsTabContent from "./tab-content/SkillsTabContent";
import ExperiencesTabContent from "./tab-content/ExperiencesTabContent";
import ProjectsTabContent from "./tab-content/ProjectsTabContent";
import { useActiveSection } from "@/context/ActiveSectionContext";

const SECTIONS = [
  {
    id: "me",
    content: <MeTabContent />,
  },
  {
    id: "skills",
    content: <SkillsTabContent />,
  },
  {
    id: "experiences",
    content: <ExperiencesTabContent />,
  },
  {
    id: "projects",
    content: <ProjectsTabContent />,
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
        className="relative w-full h-dvh bg-[url(/profile_pic.jpg)] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-12 left-6 md:left-12 z-10 max-w-4xl">
          <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight drop-shadow-lg">
            Hello I&apos;m Alban ELEZI Software engineer looking for work.
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl text-white px-4 flex flex-col pb-8">
        <div className="flex flex-col">
          {SECTIONS.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => {
                contentRefs.current[section.id] = el;
              }}
              className="flex flex-col justify-center min-h-dvh scroll-mt-28 p-4"
            >
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
