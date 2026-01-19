import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { IoPersonOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { FaRegStar } from "react-icons/fa";
import { LuWrench } from "react-icons/lu";
import MeTabContent from "./tab-content/MeTabContent";
import SkillsTabContent from "./tab-content/SkillsTabContent";
import ExperiencesTabContent from "./tab-content/ExperiencesTabContent";
import ProjectsTabContent from "./tab-content/ProjectsTabContent";
import { Separator } from "./ui/separator";
import { useActiveSection } from "@/context/ActiveSectionContext";

// ---- Tabs array for each content in the main screen ----
const TABS = [
  {
    id: "me",
    icon: <IoPersonOutline />,
    label: "ME",
    content: <MeTabContent />,
  },
  {
    id: "skills",
    icon: <VscSettings />,
    label: "SKILLS",
    content: <SkillsTabContent />,
  },
  {
    id: "experiences",
    icon: <FaRegStar />,
    label: "EXPERIENCES",
    content: <ExperiencesTabContent />,
  },
  {
    id: "projects",
    icon: <LuWrench />,
    label: "PROJECTS",
    content: <ProjectsTabContent />,
  },
];

export default function MainScreen() {
  // ---- Default value of active tab is the first one ----
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const { setActiveSection } = useActiveSection();

  // ---- Ref object with each content element for scroll syncing between tab content and tab triggers ----
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // ---- To prevent intersection observer from triggering while scrolling programmatically ----
  const isScrolling = useRef(false);

  const handleTabClick = (tabId: string) => {
    isScrolling.current = true;
    setActiveTab(tabId);
    setActiveSection(tabId);

    const element = contentRefs.current[tabId];
    if (element) {
      // Offset for the fixed header (approx 100px)
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    // ---- Intersection Observer to sync tabs with current element in view ----
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Uses viewport as root
    );

    // ---- Observe each content element ----
    const refs = contentRefs.current;
    Object.values(refs).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // ---- Clean ----
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
        <div className="flex flex-col gap-y-8">
          {TABS.map((tab, index) => (
            <div
              key={tab.id}
              id={tab.id}
              ref={(el) => {
                contentRefs.current[tab.id] = el;
              }}
              className="flex flex-col justify-center scroll-mt-28"
            >
              {tab.content}

              {index !== TABS.length - 1 && (
                <div className="mt-8 w-[80%] ml-auto mr-auto">
                  <Separator />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="sticky bottom-0 bg-black/90 backdrop-blur z-10 py-4 mt-8">
          <Tabs
            value={activeTab}
            onValueChange={handleTabClick}
            className="h-auto w-full md:w-[95%] overflow-x-clip md:overflow-x-visible mx-auto"
          >
            <TabsList className="w-full bg-transparent h-[80px]">
              {TABS.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  className="text-white data-[state=active]:bg-custom-green data-[state=active]:text-black skew-x-[21deg]"
                  value={tab.id}
                >
                  <div className="flex flex-col justify-center items-center h-full w-full skew-x-[-21deg]">
                    {tab.icon}
                    <div className="text-[10px] md:text-sm">{tab.label}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
