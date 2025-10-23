import React from 'react'
import MainTitle from './MainTitle'
import ArrowIcon from './ArrowIcon'

interface IntroScreenProps {
    startClick?(): void
}

export default function IntroScreen(props: IntroScreenProps) {
    return (
        <div className="h-full w-full flex justify-center items-center relative">
            <MainTitle />
            <div className="flex flex-col justify-center items-center absolute bottom-[16px] w-[120px] gap-y-2">
                <div className="flex flex-row rotate-[90deg] h-[30px] md:h-[60px]" onClick={props.startClick}>
                    <ArrowIcon direction="right" className="w-[15px] md:w-[30px]" />
                    <ArrowIcon direction="right" className="w-[15px] md:w-[30px]" />
                </div>
            </div>
        </div>
    )
}
