import React from 'react'
import ArrowIcon from './ArrowIcon'
export default function MainTitle() {
    return (
        <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center">
            <div className="flex flex-1 flex-row relative h-full w-full">
                <div className="w-full min-w-[180px] bg-custom-green"></div>
                <div className="flex flex-column ml-[-15px] w-full">
                    <ArrowIcon direction="right" />
                    <ArrowIcon direction="right" />
                    <ArrowIcon direction="right" />
                </div>
            </div>

            <div className="flex flex-col w-fit justify-center text-center h-full">
                <div className='w-full font-extrabold uppercase tracking-widest text-[40px] text-outline-custom-green leading-[56px]'>
                    Alban ELEZI
                </div>
                <div className='w-full text-white text-[20px]'>
                    Software Engineer
                </div>
            </div>
            <div className="flex flex-1 flex-row relative h-full w-full">
                <div className="flex flex-column justify-end w-full mr-[-15px]">
                    <ArrowIcon direction="left" />
                    <ArrowIcon direction="left" />
                    <ArrowIcon direction="left" />
                </div>
                <div className="w-full min-w-[180px] bg-custom-green"></div>
            </div>
        </div>
    )
}
