import React from 'react'
import MainTitle from './MainTitle'
import ArrowIcon from './ArrowIcon'
import { Button } from './ui/button'

interface IntroScreenProps {
    startClick?(): void
}

export default function IntroScreen(props: IntroScreenProps) {
    return (
        <div className="h-full w-full flex justify-center items-center relative">
            <MainTitle />
            <div className="flex flex-col justify-center items-center absolute bottom-[16px] w-[120px] gap-y-2">
                <div className="flex flex-row h-[60px] rotate-[90deg]">
                    <ArrowIcon direction="right" className="w-full" />
                    <ArrowIcon direction="right" className="w-full" />
                </div>
                <Button className="w-full" onClick={props.startClick}>
                    START
                </Button>
            </div>
        </div>
    )
}
