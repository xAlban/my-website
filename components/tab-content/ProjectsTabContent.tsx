import React from 'react'
import GenericTabContent from './GenericTabContent'

export default function ProjectsTabContent() {
    return (
        <GenericTabContent title="PROJECTS">
            <h3 className="text-2xl text-custom-purple">Virtual dressing experiences for e-commerce platforms</h3>
            <ul className="list-disc list-inside marker:text-custom-green">
                <li>Front-end development of an innovative virtual dressing experience.</li>
                <li>Direct integration into client websites.</li>
            </ul>
            <h3 className="text-2xl text-custom-purple">IoT Mobile App with Augmented Reality</h3>
            <ul className="list-disc list-inside marker:text-custom-green">
                <li>Front-end development and communication with IoT devices</li>
            </ul>
        </GenericTabContent>
    )
}
