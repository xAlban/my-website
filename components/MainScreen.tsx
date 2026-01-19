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
    <div className="w-full flex flex-col md:flex-row justify-center items-start">
      <div className="hidden md:block w-[50%] h-dvh sticky top-0 p-[40px]">
        <div className="w-full h-full flex justify-center items-center mask-[url(/image_mask.svg)] bg-[url(/profile_pic.jpg)] bg-position-[33%] bg-size-[250%] 2xl:bg-cover mask-no-repeat mask-contain mask-center"></div>
      </div>
      <div className="w-full md:w-[50%] text-white px-4 flex flex-col pt-24 pb-8">
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
