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

// ---- Tabs array for each content in the main screen ----
const TABS = [
    {
        id: "me",
        icon: <IoPersonOutline />,
        label: "ME",
        content: <MeTabContent />
    },
    {
        id: "skills",
        icon: <VscSettings />,
        label: "SKILLS",
        content: <SkillsTabContent />
    },
    {
        id: "experiences",
        icon: <FaRegStar />,
        label: "EXPERIENCES",
        content: <ExperiencesTabContent />
    },
    {
        id: "projects",
        icon: <LuWrench />,
        label: "PROJECTS",
        content: <ProjectsTabContent />
    },
];

export default function MainScreen() {
    // ---- Default value of active tab is the first one ----
    const [activeTab, setActiveTab] = useState(TABS[0].id);

    // ---- Ref object with each content element for scroll syncing between tab content and tab triggers ----
    const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // ---- To prevent intersection observer from triggering while scrolling programmatically ----
    const isScrolling = useRef(false);

    const handleTabClick = (tabId: string) => {
        isScrolling.current = true;
        setActiveTab(tabId);
        contentRefs.current[tabId]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
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
                    }
                });
            },
            { root: scrollContainerRef.current, threshold: 0.5 }
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
    }, []);

    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
            <div className="hidden md:block w-[50%] h-dvh snap-start p-[40px]">
                <div className="w-full h-full flex justify-center items-center mask-[url(/image_mask.svg)] bg-[url(/profile_pic.jpg)] bg-position-[33%] bg-size-[250%] 2xl:bg-cover mask-no-repeat mask-contain mask-center"></div>
            </div>
            <div className="w-full md:w-[50%] h-dvh text-white p-x-4 snap-start flex flex-col">
                <div className="overflow-y-auto flex flex-col gap-y-8" ref={scrollContainerRef}>
                    {TABS.map((tab, index) => (
                        <div
                            key={tab.id}
                            id={tab.id}
                            ref={(el) => {
                                contentRefs.current[tab.id] = el;
                            }}
                            className="flex flex-col justify-center px-[40px]"
                        >
                            {tab.content}

                            {
                                index !== TABS.length - 1 && <div className="mt-8 w-[80%] ml-auto mr-auto">
                                    <Separator />
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <Tabs value={activeTab} onValueChange={handleTabClick} className="h-auto w-full">
                    <TabsList className="w-full bg-transparent h-[80px]">
                        {TABS.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                className="text-white data-[state=active]:bg-custom-green data-[state=active]:text-black"
                                value={tab.id}
                            >
                                <div className="flex flex-col justify-center items-center h-full w-full">
                                    {tab.icon}
                                    <div className="text-[10px] md:text-sm">{tab.label}</div>
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>
        </div>
    );
}
