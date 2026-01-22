import React from "react";

export default function SkillSection() {
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
    <div className="w-full h-full flex flex-col justify-evenly md:flex-row gap-y-5 gap-x-24 text-left pb-4 pt-24">
      <div className="flex flex-1 max-w-[1000px] max-h-[50%] md:max-h-[70%] items-center">
        <h2 className="text-white font-bold text-2xl md:text-6xl">SKILLS</h2>
      </div>
      <div className="flex flex-col max-w-[1000px] flex-1 gap-20 md:px-[40px] py-12">
        <div className="flex flex-col gap-y-12">
          <h2 className="font-bold text-2xl md:text-4xl">Tech</h2>
          <div className="flex flex-col gap-y-10">
            {techSkills.map((techSkill) => (
              <div
                key={techSkill.name}
                className="flex flex-row justify-center"
              >
                <div className="flex-2 text-lg md:text-2xl">
                  {techSkill.name}
                </div>
                <div className="flex flex-3 flex-row gap-x-2 min-h-[16px] md:min-h-[32px] justify-end">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className={`${
                        i < techSkill.level ? "bg-custom-green" : "bg-black"
                      } flex-1 h-full max-h-[32px] max-w-[44px]`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-12">
          <h2 className="font-bold text-2xl md:text-4xl">Languages</h2>
          <div className="flex flex-col gap-y-10">
            {languageSkills.map((languageSkill) => (
              <div
                key={languageSkill.name}
                className="flex flex-row justify-center"
              >
                <div className="flex-2 text-lg md:text-2xl">
                  {languageSkill.name}
                </div>
                <div className="flex flex-3 flex-row gap-x-2 min-h-[16px] md:min-h-[32px] justify-end">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className={`${
                        i < languageSkill.level ? "bg-custom-green" : "bg-black"
                      } flex-1 h-full max-h-[32px] max-w-[44px]`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
