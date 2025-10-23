import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { IoPersonOutline } from 'react-icons/io5'
import { VscSettings } from 'react-icons/vsc'
import { FaRegStar } from 'react-icons/fa'
import { LuWrench } from 'react-icons/lu'
import Image from 'next/image'

export default function MainScreen() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-[50%] h-dvh snap-start">
                <div className="w-full h-full flex justify-center items-center">
                    <Image alt="profile pic" height="518" width="370" src="/placeholder_profile_pic.png" />
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
                    <TabsList className="w-full bg-transparent h-[80px]">
                        <TabsTrigger
                            className="text-white data-[state=active]:bg-custom-green data-[state=active]:text-black"
                            value="me"
                        >
                            <div className='flex flex-col justify-center items-center h-full w-full'>
                                <IoPersonOutline />
                                <div>ME</div>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger
                            className="text-white data-[state=active]:bg-custom-green data-[state=active]:text-black"
                            value="skills"
                        >
                            <div className='flex flex-col justify-center items-center h-full w-full'>
                                <VscSettings />
                                <div>SKILLS</div>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger
                            className="text-white data-[state=active]:bg-custom-green data-[state=active]:text-black"
                            value="experiences"
                        >
                            <div className='flex flex-col justify-center items-center h-full w-full'>
                                <FaRegStar />
                                <div>EXPERIENCES</div>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger
                            className="text-white data-[state=active]:bg-custom-green data-[state=active]:text-black"
                            value="projects"
                        >
                            <div className='flex flex-col justify-center items-center h-full w-full'>
                                <LuWrench />
                                <div>PROJECTS</div>
                            </div>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </div>
    )
}
