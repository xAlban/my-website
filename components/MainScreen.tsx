import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { IoPersonOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { FaRegStar } from "react-icons/fa";
import { LuWrench } from "react-icons/lu";
import MeTabContent from "./tab-content/MeTabContent";
import SkillsTabContent from "./tab-content/SkillsTabContent";
import ExperiencesTabContent from "./tab-content/ExperiencesTabContent";
import ProjectsTabContent from "./tab-content/ProjectsTabContent";

export default function MainScreen() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
            <div className="hidden md:block w-[50%] h-dvh snap-start p-[40px]">
                <div className="w-full h-full flex justify-center items-center mask-[url(/image_mask.svg)] bg-[url(/profile_pic.jpg)] bg-position-[33%] bg-size-[250%] 2xl:bg-cover mask-no-repeat mask-contain mask-center"></div>
            </div>
            <div className="w-full md:w-[50%] h-dvh text-white p-x-4 snap-start flex">
                <Tabs defaultValue="me" className="h-full w-full">
                    <TabsContent value="me" className="px-[40px] overflow-y-auto h-full">
                        <MeTabContent />
                    </TabsContent>
                    <TabsContent value="skills" className="px-[40px] overflow-y-auto h-full">
                        <SkillsTabContent />
                    </TabsContent>
                    <TabsContent value="experiences" className="px-[40px] overflow-y-auto h-full">
                        <ExperiencesTabContent />
                    </TabsContent>
                    <TabsContent value="projects" className="px-[40px] overflow-y-auto h-full">
                        <ProjectsTabContent />
                    </TabsContent>
                    <TabsList className="w-full bg-transparent h-[80px]">
                        <TabsTrigger
                            className="text-white data-[state=active]:bg-custom-green data-[state=active]:text-black"
                            value="me"
                        >
                            <div className="flex flex-col justify-center items-center h-full w-full">
                                <IoPersonOutline />
                                <div className="text-[10px] md:text-sm">ME</div>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger
                            className="text-white data-[state=active]:bg-custom-green data-[state=active]:text-black"
                            value="skills"
                        >
                            <div className="flex flex-col justify-center items-center h-full w-full">
                                <VscSettings />
                                <div className="text-[10px] md:text-sm">SKILLS</div>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger
                            className="text-white data-[state=active]:bg-custom-green data-[state=active]:text-black"
                            value="experiences"
                        >
                            <div className="flex flex-col justify-center items-center h-full w-full">
                                <FaRegStar />
                                <div className="text-[10px] md:text-sm">EXPERIENCES</div>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger
                            className="text-white data-[state=active]:bg-custom-green data-[state=active]:text-black"
                            value="projects"
                        >
                            <div className="flex flex-col justify-center items-center h-full w-full">
                                <LuWrench />
                                <div className="text-[10px] md:text-sm">PROJECTS</div>
                            </div>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </div>
    );
}
