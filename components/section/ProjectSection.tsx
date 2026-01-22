import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Virtual dressing experiences for e-commerce platforms",
    description: [
      "Front-end development of an innovative virtual dressing experience.",
      "Direct integration into client websites.",
    ],
  },
  {
    title: "IoT Mobile App with Augmented Reality",
    description: ["Front-end development and communication with IoT devices"],
  },
  {
    title: "Maybe yours ?",
    description: ["Contact me for more info"],
  },
];

export default function ProjectSection() {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center gap-y-5 gap-x-24 text-left pb-4 pt-24">
      <div className="flex flex-1 max-w-[1000px] max-h-[50%] md:max-h-[70%] items-center w-full px-12 md:px-0">
        <h2>PROJECTS</h2>
      </div>
      <div className="flex flex-col max-w-[1000px] w-full flex-1 justify-center gap-20 md:px-[40px] py-12">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-[85%] md:basis-[30%]"
              >
                <div className="h-full p-6 border rounded-xl bg-card text-card-foreground shadow-sm bg-white/5 flex flex-col">
                  <h3 className="text-2xl mb-4 min-h-[64px] flex items-center">
                    {project.title}
                  </h3>
                  <ul className="list-disc list-inside marker:text-custom-green space-y-2">
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
