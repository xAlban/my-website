import React from "react";

export default function ExperienceSection() {
  return (
    <div className="w-full h-full flex flex-col justify-evenly md:flex-row gap-y-5 gap-x-24 text-left pb-4 pt-24">
      <div className="flex flex-1 max-w-[1000px] max-h-[50%] md:max-h-[70%] items-center">
        <h2 className="text-white font-bold text-2xl md:text-6xl">
          EXPERIENCES
        </h2>
      </div>
      <div className="flex flex-col max-w-[1000px] flex-1 justify-center gap-20 md:px-[40px] py-12">
        <div>
          <h3 className="text-2xl">Full Stack Developer @Veesual</h3>
          <h3 className="text-xl">November 2021 - August 2025</h3>
        </div>
        <ul className="list-disc list-inside marker:text-custom-green">
          <li>Web development using React, TypeScript, and Redux Toolkit.</li>
          <li>Work with an automated deployment workflow.</li>
          <li>Asynchronous collaboration within a small team. (Full remote)</li>
          <li>
            Implement processes to support company growth and ensure timely
            deliveries.
          </li>
        </ul>
        <div>
          <h3 className="text-2xl">Software Engineer @Actimage GmbH</h3>
          <h3 className="text-xl">August 2019 - November 2021</h3>
        </div>
        <ul className="list-disc list-inside marker:text-custom-green">
          <li>Augmented Reality researches with React Native</li>
          <li>Teamworking and task organization</li>
          <li>Cross-platform mobile development</li>
        </ul>
      </div>
    </div>
  );
}
