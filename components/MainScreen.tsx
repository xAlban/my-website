import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export default function MainScreen() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-[50%] bg-red-100 h-dvh snap-start">
                <div>
                    left
                </div>
            </div>
            <div className="w-full md:w-[50%] h-dvh text-white p-x-4 snap-start">
                <Tabs defaultValue="me" className="h-full w-full">
                    <TabsContent value="me">
                        <div className="h-full w-full flex flex-col justify-center gap-y-5 text-left">
                            <h2 className="text-custom-purple text-3xl">
                                TECH ENTHUSIAST
                            </h2>
                            <p className="text-xl">
                                New mobile phone ? Framework ? I&apos;ll be up to date! I&apos;m interested in all techs at aninternational level. That&apos;s why I&apos;m open to any opportunity abroad.Hobbies: Volleyball, Photography, Competitive Video-games (link flickr or include photos here)
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="skills">Skills</TabsContent>
                    <TabsContent value="experiences">Experiences</TabsContent>
                    <TabsContent value="projects">Projects</TabsContent>
                    <TabsList className="w-full bg-transparent h-[80px] md:h-[40px]">
                        <TabsTrigger value="me">ME</TabsTrigger>
                        <TabsTrigger value="skills">SKILLS</TabsTrigger>
                        <TabsTrigger value="experiences">EXPERIENCES</TabsTrigger>
                        <TabsTrigger value="projects">PROJECTS</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </div>
    )
}
