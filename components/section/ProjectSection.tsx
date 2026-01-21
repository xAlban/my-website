import React from "react";

export default function ProjectSection() {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center gap-y-5 gap-x-24 text-left pb-4 pt-24">
      <div className="flex flex-1 max-w-[1000px] max-h-[50%] md:max-h-[70%] items-center">
        <h2 className="text-white font-bold text-2xl md:text-6xl">PROJECTS</h2>
      </div>
      <div className="flex flex-col max-w-[1000px] flex-1 justify-center gap-20 px-[40px] py-12">
        <div className="flex flex-row w-full">
          <div>
            <h3 className="text-2xl">
              Virtual dressing experiences for e-commerce platforms
            </h3>
            <ul className="list-disc list-inside marker:text-custom-green">
              <li>
                Front-end development of an innovative virtual dressing
                experience.
              </li>
              <li>Direct integration into client websites.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">IoT Mobile App with Augmented Reality</h3>
            <ul className="list-disc list-inside marker:text-custom-green">
              <li>Front-end development and communication with IoT devices</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Maybe yours ?</h3>
            <ul className="list-disc list-inside marker:text-custom-green">
              <li>Contact me for more info</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
