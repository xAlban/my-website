"use client"

import React, { useState, useEffect } from 'react'
import GenericTabContent from './GenericTabContent'
import Link from 'next/link';
import Carousel from '../carousel/Carousel';

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
        <GenericTabContent title="TECH ENTHUSIAST" titleClassName="px-[40px]">
            <div className="px-[40px]">
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
            </div>
            <Carousel items={photos.map(photo => `/photo_carousel/${photo}`)} />
        </GenericTabContent>
    )
}
