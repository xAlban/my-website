import React from "react";

export default function ProjectSection() {
  return (
    <div className="w-full flex flex-col gap-y-5 text-left py-4">
      <h2 className="text-custom-purple text-3xl px-[40px]">PROJECTS</h2>
      <div className="px-[40px]">
        <h3 className="text-2xl text-custom-purple">
          Virtual dressing experiences for e-commerce platforms
        </h3>
        <ul className="list-disc list-inside marker:text-custom-green">
          <li>
            Front-end development of an innovative virtual dressing experience.
          </li>
          <li>Direct integration into client websites.</li>
        </ul>
        <h3 className="text-2xl text-custom-purple">
          IoT Mobile App with Augmented Reality
        </h3>
        <ul className="list-disc list-inside marker:text-custom-green">
          <li>Front-end development and communication with IoT devices</li>
        </ul>
      </div>
    </div>
  );
}
