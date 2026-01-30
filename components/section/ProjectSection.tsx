import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project, ProjectCard } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "Virtual dressing experiences for e-commerce platforms",
    description: [
      "Front-end development of an innovative virtual dressing experience.",
      "Direct integration into client websites.",
    ],
    imgSrc: "/screen_experience_veesual_desktop.png",
  },
  {
    title: "IoT Mobile App with Augmented Reality",
    description: ["Front-end development and communication with IoT devices"],
    imgSrc: "/sauter_modulo_6.jpeg",
  },
  {
    title: "Maybe yours!",
    onlyTitle: true,
  },
];

export default function ProjectSection() {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center gap-y-5 gap-x-24 text-left pb-4 pt-24">
      <div className="flex flex-1 max-h-[50%] md:max-h-[70%] items-center w-full px-12 md:px-0 justify-center">
        <h2 className="cyber-glitch" data-text="PROJECTS">
          PROJECTS
        </h2>
      </div>
      <div className="flex flex-col w-full min-h-[50svh] flex-1 justify-center items-center gap-20 md:px-[40px] py-12">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full h-full max-w-[1800px]"
        >
          <CarouselContent className="min-h-[50svh]">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="basis-[85%] md:basis-[30%] max-w-[500px]"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {projects.length > 3 && (
            <>
              <CarouselPrevious className="hidden md:flex -left-4" />
              <CarouselNext className="hidden md:flex -right-4" />
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
}
