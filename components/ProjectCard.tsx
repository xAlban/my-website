import React from "react";
import Image from "next/image";

export interface Project {
  title: string;
  description?: string[];
  imgSrc?: string;
  onlyTitle?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="h-full flex flex-col overflow-hidden p-6">
      <div
        className={`h-[300px] w-full relative flex justify-center items-center ${
          project.onlyTitle ? "border-white border-4" : ""
        }`}
      >
        {project.imgSrc && (
          <Image
            src={project.imgSrc}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 85vw, 30vw"
          />
        )}
        {project.onlyTitle && (
          <h3 className="uppercase p-6 text-center">{project.title}</h3>
        )}
      </div>
      {project.description && (
        <div className="flex flex-col flex-1">
          <h3 className="text-2xl mb-4 min-h-[64px] flex items-center">
            {project.title}
          </h3>
          <ul className="list-disc list-inside marker:text-custom-green space-y-2">
            {project.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
