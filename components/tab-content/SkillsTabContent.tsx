import React from "react";
import GenericTabContent from "./GenericTabContent";

export default function SkillsTabContent() {
    const techSkills = [
        { name: "React", level: 5 },
        { name: "React Native", level: 3 },
        { name: "TypeScript", level: 4 },
        { name: "HTML/CSS", level: 4 },
    ];

    const languageSkills = [
        { name: "French", level: 5 },
        { name: "Albanian", level: 5 },
        { name: "German", level: 3 },
        { name: "English", level: 4 },
    ];
    return (
        <GenericTabContent title="SKILLS">
            <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl text-custom-purple">Tech</h2>
                    <div className="flex flex-col gap-y-2">
                        {techSkills.map((techSkill) => (
                            <div
                                key={techSkill.name}
                                className="flex flex-row justify-center"
                            >
                                <div className="flex-2 text-lg">
                                    {techSkill.name}
                                </div>
                                <div className="flex flex-3 flex-row gap-x-2 min-h-[32px]">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <div
                                            key={i}
                                            className={`${
                                                i < techSkill.level
                                                    ? "bg-custom-green"
                                                    : ""
                                            } flex-1 h-full`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl text-custom-purple">Languages</h2>
                    <div className="flex flex-col gap-y-2">
                        {languageSkills.map((languageSkill) => (
                            <div
                                key={languageSkill.name}
                                className="flex flex-row justify-center"
                            >
                                <div className="flex-2 text-lg">
                                    {languageSkill.name}
                                </div>
                                <div className="flex flex-3 flex-row gap-x-2 min-h-[32px]">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <div
                                            key={i}
                                            className={`${
                                                i < languageSkill.level
                                                    ? "bg-custom-green"
                                                    : ""
                                            } flex-1 h-full`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </GenericTabContent>
    );
}
