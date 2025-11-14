"use client"

import React, { useState, useEffect } from 'react'
import GenericTabContent from './GenericTabContent'
import Link from 'next/link';

export default function MeTabContent() {
    const [photos, setPhotos] = useState<string[]>([])

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
            <div className="h-[50dvh] overflow-x-auto flex flex-nowrap">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`
                            ${index !== 0 ? "-ml-[60px]" : ""}
                            w-[75%] md:w-[50%] xl:w-[33%]
                            h-full
                            flex-shrink-0
                            flex justify-center
                            items-center
                            mask-[url(/image_mask.svg)]
                            bg-[url(/photo_carousel/${photo})]
                            bg-position-[50%]
                            bg-cover
                            mask-no-repeat
                            mask-contain
                            mask-center
                        `}
                    ></div>
                ))}
            </div>
        </GenericTabContent>
    )
}
