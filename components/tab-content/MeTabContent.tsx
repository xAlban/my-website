"use client"

import React, { useState, useEffect } from 'react'
import GenericTabContent from './GenericTabContent'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel'
import Link from 'next/link';

let intervalId: null | number = null;

export default function MeTabContent() {
    const [photos, setPhotos] = useState<string[]>([])
    const [api, setApi] = React.useState<CarouselApi>()

    useEffect(() => {
        fetch('/api/photos')
            .then((res) => res.json())
            .then((data) => {
                setPhotos(data)
            })
    }, [])

    return (
        <GenericTabContent title="TECH ENTHUSIAST">
            <p className="text-xl">
                New mobile phone ? Framework ? I&apos;ll be up to date!<br />I&apos;m interested in all techs at an international level. That&apos;s why I&apos;m open to any opportunity abroad.
            </p>
            <p className="text-xl">
                Hobbies:
            </p>
            <ul className="list-disc list-inside marker:text-custom-green">
                <li>
                    Volleyball
                </li>
                <li>
                    <Link href="https://www.flickr.com/photos/200167340@N06/albums" className="text-custom-purple underline">Photography</Link>
                </li>
                <li>
                    Competitive Video-games
                </li>
            </ul>
            <Carousel
                setApi={(newApi) => {
                    setApi(newApi)
                    if (intervalId) {
                        clearInterval(intervalId)
                    }
                    intervalId = window.setInterval(() => {
                        console.log('in interval')
                        api?.scrollNext()
                    }, 5000)
                }}
                opts={{ loop: true }}
                className="flex items-center justify-center max-h-[600px]"
            >
                <CarouselContent className="h-full">
                    {photos.map((photo, index) => (
                        <CarouselItem key={index} className="w-full h-full max-h-[600px] flex items-center justify-center">
                            <img src={`/photo_carousel/${photo}`} alt={photo} className="object-contain" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </GenericTabContent>
    )
}
