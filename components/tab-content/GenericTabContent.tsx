import React, { ReactNode } from 'react'

interface GenericTabContentProps {
    children: ReactNode,
    title?: string
}

export default function GenericTabContent(props: GenericTabContentProps) {
    const { children, title } = props;
    return (
        <div className="h-full w-full flex flex-col justify-center gap-y-5 text-left">
            {
                title && <h2 className="text-custom-purple text-3xl">
                    {title}
                </h2>
            }
            {
                children
            }
        </div>
    )
}
